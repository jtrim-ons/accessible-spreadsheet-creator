import fs from 'node:fs';
import Handlebars from 'handlebars';
import JSZip from 'jszip';
import odsTemplate from './template-spreadsheets/template.js';

console.log(odsTemplate);

export default function createZip(odsData) {
	const zip = new JSZip();

	for (const item of odsTemplate) {
		const template = Handlebars.compile(item.contents);
		zip.file(item.filename, template(odsData));
	}

	zip.generateNodeStream({type: 'nodebuffer', streamFiles: true})
		.pipe(fs.createWriteStream('out.zip'))
		.on('finish', () => {
			console.log('out.zip written.');
		});
}

const odsData = {
	tableHeadings: [
		'Category',
		'Selected group',
		'England and Wales'
	],
	sheets: [
		{sheetName: 'Age'},
		{sheetName: 'Ethnicity'}
	]
};

createZip(odsData);
