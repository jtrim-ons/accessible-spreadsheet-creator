import odsTemplate from './template-spreadsheets/template.js';
import approxTextWidth from './approx-text-width.js';
import Mustache from 'mustache';

function cellRef(col, row) {
	return String.fromCodePoint('A'.codePointAt(0) - 1 + col) + row;
}

function formatValues(values, style) {
	if (style === 'text') {
		return values.map(d => ({isText: true, displayValue: d}));
	}

	if (style === 'number_with_commas') {
		return values.map(d => ({isNumeric: true, rawValue: d, displayValue: d.toLocaleString('en-GB'), style}));
	}

	if (style === 'number_1dp') {
		return values.map(d => ({isNumeric: true, rawValue: d, displayValue: d.toFixed(1), style}));
	}

	throw new Error('Unrecognised column style: ' + style);
}

function replaceNotes(t, tSetterCallback, matchReplacer) {
	const noteRegExp = /\[\[[^\]]+\]\]/g;
	tSetterCallback(t.replace(noteRegExp, matchReplacer));
	return true;
}

function visitNotes(sheet, matchReplacer) {
	replaceNotes(
		sheet.sheetName, t => {
			sheet.sheetName = t;
		}, matchReplacer,
	);
	for (let i=0; i<sheet.sheetIntroText.length; i++) {
		replaceNotes(
			sheet.sheetIntroText[i], t => {
				sheet.sheetIntroText[i] = t;
			}, matchReplacer,
		);
	}

	for (const column of sheet.columns) {
		replaceNotes(
			column.heading, t => {
				column.heading = t;
			}, matchReplacer,
		);

		if (column.style === 'text') {
			for (let i=0; i<column.values.length; i++) {
				replaceNotes(
					column.values[i], t => {
						column.values[i] = t;
					}, matchReplacer,
				);
			}
		}
	}
}

function processNotes(odsData) {
	if (!odsData.notes) {
		odsData.hasNotes = false;
		return;
	}

	odsData.notes.forEach(n => n.used = false);

	const notesMap = new Map(odsData.notes.map(note => [note.name, note]));

	for (const sheet of odsData.sheets) {
		sheet.sheetIntroText ||= [];
		sheet.hasNotes = false;
		visitNotes(sheet, match => {
			// Don't replace [[note_id]] yet...
			notesMap.get(match.slice(2, -2)).used = true;
			sheet.hasNotes = true;
			return match;
		});
	}

	odsData.notes = odsData.notes.filter(n => n.used);
	odsData.notes.forEach((n, i) => n.name = `[note ${i + 1}]`);

	for (const sheet of odsData.sheets) {
		if (sheet.hasNotes) {
			visitNotes(sheet, match => notesMap.get(match.slice(2, -2)).name);
		}
	}

	odsData.hasNotes = odsData.notes.length > 0;
}

export default function createZip(odsData) {
	odsData = JSON.parse(JSON.stringify(odsData));
	odsData.tableCount = odsData.sheets.length + 1; // Add 1 for cover sheet TODO add another for contents?
	odsData.firstTocCell = cellRef(1, 3);
	odsData.lastTocCell = cellRef(2, 3 + odsData.sheets.length);

	processNotes(odsData);

	odsData.coverSheetContents = odsData.coverSheetContents.map(item =>
		item.startsWith('## ')
			? {isSubtitle: true, text: item.slice(3)}
			: /^\[.*\]\(.*\)$/.test(item)
				? {isHyperlink: true, text: item.replace(/^\[(.*)\].*$/, '$1'), href: item.replace(/^.*\((.*)\)$/, '$1')}
				: {isText: true, text: item}
	);

	let i = 0;
	for (const sheet of odsData.sheets) {
		sheet.sheetNumber = i + 1;
		sheet.sheetIntroText ||= [];
		const oneTableMessage = sheet.hasNotes
			? 'This worksheet contains one table. Some cells refer to notes, which can be found on the notes worksheet.'
			: 'This worksheet contains one table.';
		sheet.sheetIntroText = [oneTableMessage, ...sheet.sheetIntroText];
		const introTextLength = sheet.sheetIntroText.length;
		sheet.introText = sheet.sheetIntroText.map((t, i) => ({text: t, isLastIntroRow: i === sheet.sheetIntroText.length - 1}));
		sheet.firstTableCell = cellRef(1, 2 + introTextLength);
		sheet.lastTableCell = cellRef(sheet.columns.length, 2 + sheet.columns[0].values.length + introTextLength);

		for (const column of sheet.columns) {
			column.valuesFormatted = formatValues(column.values, column.style);
			column.heading = column.heading.split('\n');
		}

		sheet.rows = [];
		for (let j=0; j<sheet.columns[0].values.length; j++) {
			sheet.rows.push({cellsInRow: sheet.columns.map(c => c.valuesFormatted[j])});
		}

		sheet.columnStyles = sheet.columns.map((column, j) => {
			const widthCm = Math.max(2.4, columnWidth(column.valuesFormatted.map(d => d.displayValue)));
			return {name: 'colStyle' + i + '_' + j, widthCm};
		});

		i++;
	}

	const result = [];

	for (const item of odsTemplate) {
		result.push({filename: item.filename, contents: Mustache.render(item.contents, odsData)});
	}

	return result;
}

function columnWidth(strings) {
	const maxPixelWidth = Math.max(...strings.map(d => approxTextWidth(d)));
	// 37.8 pixels per cm, and add a bit in case the width is inaccurate:
	return ((maxPixelWidth / 37.8) + 0.5).toFixed(2);
}
