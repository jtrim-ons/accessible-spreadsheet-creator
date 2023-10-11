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
	coverSheetTitle: 'Some pretend data',
	coverSheetContents: [
		{isSubtitle: true, text: 'Subtitle 1'},
		{isSubtitle: false, text: 'Text 1a'},
		{isSubtitle: false, text: 'Text 1b'},
		{isSubtitle: true, text: 'Subtitle 2'},
		{isSubtitle: false, text: 'Text 2a'},
		{isSubtitle: false, text: 'Text 2b'},
	],
	tableHeadings: [
		'Category',
		'Selected group',
		'England and Wales with a really long title',
	],
	sheets: [
		{
			sheetName: 'Age',
			tableName: 'Age',
			sheetIntroText: ['Some introductory text'],
			numberStyles: ['cell_number_with_commas', 'cell_number_1dp'],
			rowData: [
				{name: 'First category', values: [12_345, 45.6]},
				{name: 'Second category', values: [1_234_567, 45.6]},
			],
		},
		{
			sheetName: 'Ethnicity',
			tableName: 'Ethnicity',
			numberStyles: ['cell_number_1dp', 'cell_number_1dp'],
			rowData: [
				{name: 'First category', values: [12.3, 45.6]},
				{name: 'Second category', values: [12.3, 45.6]},
				{name: 'Really long looooooong category', values: [78.9, 45.6]},
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

