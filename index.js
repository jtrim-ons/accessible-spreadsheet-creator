import odsTemplate from './template-spreadsheets/template.js';

// Put `mimetype` file first in the zip file so that file type detectors will
// recognise the ODS file.
odsTemplate.sort((a, b) => (b.filename==='mimetype') - (a.filename==='mimetype'));

function cellRef(col, row) {
	return String.fromCodePoint('A'.codePointAt(0) - 1 + col) + row;
}

export default function createZip(odsData, Handlebars) {
	odsData.tableCount = odsData.sheets.length + 1; // Add 1 for cover sheet TODO add another for contents?
	odsData.firstTocCell = cellRef(1, 3);
	odsData.lastTocCell = cellRef(2, 5);
	odsData.firstCharacteristicsCell = cellRef(1, 3);
	odsData.lastCharacteristicsCell = cellRef(2, 5);

	let i = 0;
	for (const sheet of odsData.sheets) {
		sheet.firstTableCell = cellRef(1, 3);
		sheet.lastTableCell = cellRef(1 + sheet.rowData[0].values.length, 3 + sheet.rowData.length);
		sheet.firstColumnStyleName = 'firstColStyle' + i;
		// 37.8 pixels per cm, and add a bit in case the width is inaccurate:
		sheet.firstColumnWidthCm = (Math.max(
			...sheet.rowData.map(d => approxTextWidth(d.name))
		) / 37.8 + 0.5).toFixed(2);
		i++;
	}

	const result = [];

	for (const item of odsTemplate) {
		const template = Handlebars.compile(item.contents);
		result.push({filename: item.filename, contents: template(odsData)});
	}

	return result;
}

function approxTextWidth(text) {
	let width = 0;
	for (const c of text) {
		width += c in characterWidths12ptArial ? characterWidths12ptArial[c] : characterWidths12ptArial["AVERAGE"];
	}

	return width;
}

const characterWidths12ptArial = {0: 8.9, 1: 8.9, 2: 8.9, 3: 8.9, 4: 8.9, 5: 8.9, 6: 8.9, 7: 8.9, 8: 8.9, 9: 8.9, a: 8.9, b: 8.9, c: 8, d: 8.9, e: 8.9, f: 4.43, g: 8.9, h: 8.9, i: 3.57, j: 3.57, k: 8, l: 3.57, m: 13.33, n: 8.9, o: 8.9, p: 8.9, q: 8.9, r: 5.33, s: 8, t: 4.43, u: 8.9, v: 8, w: 11.57, x: 8, y: 8, z: 8, A: 10.67, B: 10.67, C: 11.57, D: 11.57, E: 10.67, F: 9.77, G: 12.43, H: 11.57, I: 4.43, J: 8, K: 10.67, L: 8.9, M: 13.33, N: 11.57, O: 12.43, P: 10.67, Q: 12.43, R: 11.57, S: 10.67, T: 9.77, U: 11.57, V: 10.67, W: 15.1, X: 10.67, Y: 10.67, Z: 9.77, ' ': 4.43, '!': 4.43, '"': 5.67, '#': 8.9, $: 8.9, '%': 14.23, '&': 10.67, '\'': 3.07, '(': 5.33, ')': 5.33, '*': 6.23, '+': 9.33, ',': 4.43, '-': 5.33, '.': 4.43, '/': 4.43, ':': 4.43, ';': 4.43, '<': 9.33, '=': 9.33, '>': 9.33, '?': 8.9, '@': 16.23, '[': 4.43, ']': 4.43, '^': 7.5, _: 8.9, '`': 5.33, '{': 5.33, '|': 4.17, '}': 5.33, '~': 9.33, AVERAGE: 8.472_340_340_309_955};
