import odsTemplate from './template-spreadsheets/template.js';
import Mustache from 'mustache';

// Put `mimetype` file first in the zip file so that file type detectors will
// recognise the ODS file.
odsTemplate.sort((a, b) => (b.filename==='mimetype') - (a.filename==='mimetype'));

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

function approxTextWidth(text) {
	let width = 0;
	for (const c of text) {
		width += c in characterWidths12ptArial ? characterWidths12ptArial[c] : characterWidths12ptArial["AVERAGE"];
	}

	return width;
}

const characterWidths12ptArial = {0: 8.9, 1: 8.9, 2: 8.9, 3: 8.9, 4: 8.9, 5: 8.9, 6: 8.9, 7: 8.9, 8: 8.9, 9: 8.9, a: 8.9, b: 8.9, c: 8, d: 8.9, e: 8.9, f: 4.43, g: 8.9, h: 8.9, i: 3.57, j: 3.57, k: 8, l: 3.57, m: 13.33, n: 8.9, o: 8.9, p: 8.9, q: 8.9, r: 5.33, s: 8, t: 4.43, u: 8.9, v: 8, w: 11.57, x: 8, y: 8, z: 8, A: 10.67, B: 10.67, C: 11.57, D: 11.57, E: 10.67, F: 9.77, G: 12.43, H: 11.57, I: 4.43, J: 8, K: 10.67, L: 8.9, M: 13.33, N: 11.57, O: 12.43, P: 10.67, Q: 12.43, R: 11.57, S: 10.67, T: 9.77, U: 11.57, V: 10.67, W: 15.1, X: 10.67, Y: 10.67, Z: 9.77, ' ': 4.43, '!': 4.43, '"': 5.67, '#': 8.9, $: 8.9, '%': 14.23, '&': 10.67, '\'': 3.07, '(': 5.33, ')': 5.33, '*': 6.23, '+': 9.33, ',': 4.43, '-': 5.33, '.': 4.43, '/': 4.43, ':': 4.43, ';': 4.43, '<': 9.33, '=': 9.33, '>': 9.33, '?': 8.9, '@': 16.23, '[': 4.43, ']': 4.43, '^': 7.5, _: 8.9, '`': 5.33, '{': 5.33, '|': 4.17, '}': 5.33, '~': 9.33, AVERAGE: 8.472_340_340_309_955};
