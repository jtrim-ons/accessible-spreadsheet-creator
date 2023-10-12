import odsTemplate from './template-spreadsheets/template.js';
import Mustache from 'mustache';

// Put `mimetype` file first in the zip file so that file type detectors will
// recognise the ODS file.
odsTemplate.sort((a, b) => (b.filename==='mimetype') - (a.filename==='mimetype'));

function cellRef(col, row) {
	return String.fromCodePoint('A'.codePointAt(0) - 1 + col) + row;
}

function formatValues(values, numberStyles) {
	if (values.length != numberStyles.length) throw new Error("Unexpected numberStyles length");
	return values.map((d, i) => {
		const cellFormat = numberStyles[i];
		if (!['cell_number_with_commas', 'cell_number_1dp'].includes(cellFormat)) {
			throw new Error('Unrecognised number format: ' + cellFormat);
		}

		const displayValue = cellFormat === 'cell_number_with_commas'
			? d.toLocaleString('en-GB')
			: d.toFixed(1);

		return {rawValue: d, displayValue, cellFormat};
	});
}

export default function createZip(odsData) {
	odsData = JSON.parse(JSON.stringify(odsData));
	odsData.tableCount = odsData.sheets.length + 1; // Add 1 for cover sheet TODO add another for contents?
	odsData.firstTocCell = cellRef(1, 3);
	odsData.lastTocCell = cellRef(2, 3 + odsData.sheets.length);

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
		const introTextLength = sheet.sheetIntroText.length;
		sheet.sheetIntroText = ['This worksheet contains one table.', ...sheet.sheetIntroText];
		sheet.introText = sheet.sheetIntroText.map((t, i) => ({text: t, isLastIntroRow: i === sheet.sheetIntroText.length - 1}));
		sheet.firstTableCell = cellRef(1, 3 + introTextLength);
		sheet.lastTableCell = cellRef(1 + sheet.rowData[0].values.length, 3 + sheet.rowData.length + introTextLength);

		for (const row of sheet.rowData) {
			row.valuesFormatted = formatValues(row.values, sheet.numberStyles);
		}

		sheet.columnStyles = [
			{name: 'firstColStyle' + i, widthCm: columnWidth(sheet.rowData.map(d => d.name))}
		];

		for (let j = 0; j < sheet.numberStyles.length; j++) {
			const widthCm = Math.max(2.4, columnWidth(sheet.rowData.map(d => d.valuesFormatted[j].displayValue)));
			sheet.columnStyles.push(
				{name: 'colStyle' + i + '_' + j, widthCm}
			);
		}

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
