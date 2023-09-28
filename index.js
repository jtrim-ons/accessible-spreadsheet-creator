import odsTemplate from './template-spreadsheets/template.js';

function cellRef(col, row) {
	return String.fromCodePoint('A'.codePointAt(0) - 1 + col) + row;
}

export default function createZip(odsData, Handlebars) {
	odsData.tableCount = odsData.sheets.length + 1;  // add 1 for cover sheet TODO add another for contents?
	odsData.firstTocCell = cellRef(1, 3);
	odsData.lastTocCell = cellRef(2, 5);
	odsData.firstCharacteristicsCell = cellRef(1, 3);
	odsData.lastCharacteristicsCell = cellRef(2, 5);

	for (const sheet of odsData.sheets) {
		sheet.firstTableCell = cellRef(1, 3);
		sheet.lastTableCell = cellRef(1 + sheet.rowData[0].values.length, 3 + sheet.rowData.length);
	}

	const result = [];

	for (const item of odsTemplate) {
		const template = Handlebars.compile(item.contents);
		result.push({filename: item.filename, contents: template(odsData)});
	}

	return result;
}
