import fs from 'node:fs';
import JSZip from 'jszip';
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
		'## Subtitle 1',
		'Text 1a',
		'Text 1b',
		'## Subtitle 2',
		'Text 2a',
		'Text 2b',
		'[Office for National Statistics](https://www.ons.gov.uk)',
	],
	notes: [
		{name: 'note_1', text: 'Here is a note'},
		{name: 'another_note', text: 'Here is another note'},
		{name: 'note C', text: 'Another note'},
	],
	sheets: [
		{
			sheetName: 'Age',
			tableName: 'Age',
			sheetIntroText: ['Some introductory text [[another_note]][[note_1]]'],
			columns: [
				{
					style: 'text',
					heading: 'Category [[note_1]]',
					values: [
						'First category [[note_1]]',
						'Second category',
					]
				},
				{
					style: 'number_with_commas',
					heading: 'Selected group',
					values: [
						12_345, 1_234_567
					]
				},
				{
					style: 'number_1dp',
					heading: 'England and Wales with a really long title',
					values: [
						45.6, 45.6
					]
				},
			]
		},
		{
			sheetName: 'Ethnicity',
			tableName: 'Ethnicity',
			columns: [
				{
					style: 'text',
					heading: 'Category',
					values: [
						'First category',
						'Second category',
						'Really long looooooong category'
					]
				},
				{
					style: 'number_1dp',
					heading: 'Selected group',
					values: [
						12.3, 12.3, 78.9
					]
				},
				{
					style: 'number_1dp',
					heading: 'England and Wales with a really long title\n(units)',
					values: [
						45.6, 45.6, 45.6
					]
				},
			]
		},
	],
};

const zipFiles = accessibleSpreadsheetCreator(odsData);

const zip = new JSZip();
for (const {filename, contents} of zipFiles) {
	zip.file(filename, contents, {compression: filename === 'mimetype' ? 'STORE' : 'DEFLATE'});
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

