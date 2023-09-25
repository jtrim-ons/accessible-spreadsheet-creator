import fs from 'node:fs';
import JSZip from 'jszip';
import Handlebars from 'handlebars';
import accessibleSpreadsheetCreator from './index.js';
//import test from 'ava';

//test('main', t => {
//	t.throws(() => {
//		unicornFun(123);
//	}, {
//		instanceOf: TypeError,
//		message: 'Expected a string, got number',
//	});
//
//	t.is(unicornFun('unicorns'), 'unicorns & rainbows');
//});

const odsData = {
	tableHeadings: [
		'Category',
		'Selected group',
		'England and Wales',
	],
	sheets: [
		{
			sheetName: 'Age',
			tableName: 'Age',
			rowData: [
				{name: 'First category', values: [12.3, 45.6]},
				{name: 'Second category', values: [12.3, 45.6]},
			],
		},
		{
			sheetName: 'Ethnicity',
			tableName: 'Ethnicity',
			rowData: [
				{name: 'First category', values: [12.3, 45.6]},
				{name: 'Second category', values: [12.3, 45.6]},
				{name: 'Third category', values: [78.9, 45.6]},
			],
		},
	],
};

const zipFiles = accessibleSpreadsheetCreator(odsData, Handlebars);

const zip = new JSZip();
for (const {filename, contents} of zipFiles) {
	zip.file(filename, contents);
}

zip.generateNodeStream({type: 'nodebuffer', streamFiles: true})
	.pipe(fs.createWriteStream('out.zip'))
	.on('finish', () => {
		console.log('out.zip written.');
	});
zip.generateNodeStream({type: 'nodebuffer', streamFiles: true})
	.pipe(fs.createWriteStream('out.ods'))
	.on('finish', () => {
		console.log('out.ods written.');
	});

