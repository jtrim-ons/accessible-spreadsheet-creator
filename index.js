import Handlebars from 'handlebars';
import odsTemplate from './template-spreadsheets/template.js';

function cellRef(col, row) {
	return String.fromCodePoint('A'.codePointAt(0) - 1 + col) + row;
}

export default function createZip(odsData) {
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
