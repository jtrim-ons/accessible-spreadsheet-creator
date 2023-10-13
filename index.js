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

function visitNotes(sheet, visitString) {
	visitString(sheet.sheetName, t => {
		sheet.sheetName = t;
	});
	for (let i=0; i<sheet.sheetIntroText.length; i++) {
		visitString(sheet.sheetIntroText[i], t => {
			sheet.sheetIntroText[i] = t;
		});
	}

	for (const column of sheet.columns) {
		visitString(column.heading, t => {
			column.heading = t;
		});

		if (column.style === 'text') {
			for (let i=0; i<column.values.length; i++) {
				visitString(column.values[i], t => {
					column.values[i] = t;
				});
			}
		}
	}
}

function processNotes(sourceNotes, sheets) {
	if (!sourceNotes) {
		return [];
	}

	const noteRegExp = /\[\[[^\]]+\]\]/g;

	let notes = sourceNotes.map(({name, text}) => ({name, text, used: false}));
	const notesMap = new Map(notes.map(note => [`[[${note.name}]]`, note]));

	for (const sheet of sheets) {
		sheet.sheetIntroText ||= [];
		sheet.hasNotes = false;
		visitNotes(sheet, t => {
			// Don't replace [[note_id]] yet; just determine which notes should be on the notes
			// sheet and which sheets have notes.
			for (const noteRef of t.match(noteRegExp) || []) {
				notesMap.get(noteRef).used = true;
				sheet.hasNotes = true;
			}
		});
	}

	notes = notes.filter(n => n.used);
	notes.forEach((n, i) => n.name = `[note ${i + 1}]`);

	for (const sheet of sheets) {
		if (sheet.hasNotes) {
			const matchReplacer = match => notesMap.get(match).name;
			visitNotes(sheet, (t, tSetterCallback) => {
				tSetterCallback(t.replace(noteRegExp, matchReplacer));
			});
		}
	}

	return notes;
}

function columnWidth(strings) {
	const maxPixelWidth = Math.max(...strings.map(d => approxTextWidth(d)));
	// 37.8 pixels per cm, and add a bit in case the width is inaccurate:
	return ((maxPixelWidth / 37.8) + 0.5).toFixed(2);
}

function makeCoverSheetContents(coverSheetMarkdown) {
	return coverSheetMarkdown.map(item => {
		if (item.startsWith('## ')) {
			return {isSubtitle: true, text: item.slice(3)}
		}

		if (/^\[.*\]\(.*\)$/.test(item)) {
			const tokens = item.slice(1, -1).split('](');
			return {isHyperlink: true, text: tokens[0], href: tokens[1]};
		}

		return {isText: true, text: item};
	});
}

function oneTableMessage(hasNotes) {
	let result = 'This worksheet contains one table.';
	if (hasNotes) {
		result += ' Some cells refer to notes, which can be found on the notes worksheet.';
	}

	return result;
}

export default function createZip(odsData) {
	const mustacheData = {
		coverSheetTitle: odsData.coverSheetTitle,
		firstTocCell: cellRef(1, 3),
		lastTocCell: cellRef(2, 3 + odsData.sheets.length),
		coverSheetContents: makeCoverSheetContents(odsData.coverSheetContents),
		sheets: JSON.parse(JSON.stringify(odsData.sheets)),
	};

	mustacheData.notes = processNotes(odsData.notes, mustacheData.sheets);
	mustacheData.hasNotes = mustacheData.notes.length > 0;

	mustacheData.tableCount = mustacheData.sheets.length + 2 + mustacheData.hasNotes;

	for (let i=0; i<mustacheData.sheets.length; i++) {
		const sheet = mustacheData.sheets[i];
		sheet.sheetNumber = i + 1;
		sheet.sheetIntroText = [oneTableMessage(sheet.hasNotes), ...(sheet.sheetIntroText || [])];
		sheet.introText = sheet.sheetIntroText.map((t, j) => ({text: t, isLastIntroRow: j === sheet.sheetIntroText.length - 1}));
		sheet.firstTableCell = cellRef(1, 2 + sheet.sheetIntroText.length);
		sheet.lastTableCell = cellRef(sheet.columns.length, 2 + sheet.columns[0].values.length + sheet.sheetIntroText.length);

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
	}

	return odsTemplate.map(item => ({filename: item.filename, contents: Mustache.render(item.contents, mustacheData)}));
}
