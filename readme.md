# Accessible Spreadsheet Creator

## How to install it

```sh
npm install accessible-spreadsheet-creator
```

## How to use it

An example using Node:

```js
import fs from "node:fs";
import JSZip from "jszip";
import accessibleSpreadsheetCreator from "accessible-spreadsheet-creator";

const odsData = {
	coverSheetTitle: "Some pretend data",
	coverSheetContents: [
		"## Subtitle 1",
		"Text 1a",
		"Text 1b",
		"## Subtitle 2",
		"Text 2a",
		"Text 2b",
		"[Office for National Statistics](https://www.ons.gov.uk)",
	],
	notes: [
		{ name: "note_1", text: "Here is a note" },
		{ name: "another_note", text: "Here is another note" },
		{ name: "note C", text: "Another note" },
	],
	sheets: [
		{
			sheetName: "Age",
			tableName: "Age",
			sheetIntroText: ["Some introductory text [[another_note]][[note_1]]"],
			columns: [
				{
					style: "text",
					heading: "Category [[note_1]]",
					values: ["First category [[note_1]]", "Second category"],
				},
				{
					style: "number_with_commas",
					heading: "Selected group",
					values: [12_345, 1_234_567],
				},
				{
					style: "number_1dp",
					heading: "England and Wales with a really long title",
					values: [45.6, 45.6],
				},
			],
		},
		{
			sheetName: "Ethnicity",
			tableName: "Ethnicity",
			columns: [
				{
					style: "text",
					heading: "Category",
					values: [
						"First category",
						"Second category",
						"Really long looooooong category",
					],
				},
				{
					style: "number_1dp",
					heading: "Selected group",
					values: [12.3, 12.3, 78.9],
				},
				{
					style: "number_1dp",
					heading: "England and Wales with a really long title\n(units)",
					values: [45.6, 45.6, 45.6],
				},
			],
		},
	],
};

const zipFiles = accessibleSpreadsheetCreator(odsData);

const zip = new JSZip();
for (const { filename, contents } of zipFiles) {
	zip.file(filename, contents, {
		compression: filename === "mimetype" ? "STORE" : "DEFLATE",
	});
}

zip
	.generateNodeStream({ type: "nodebuffer", streamFiles: true })
	.pipe(fs.createWriteStream("out.ods"))
	.on("finish", () => {
		console.log("out.ods written.");
	});
```

The documentation for the spreadsheet object passed to `accessibleSpreadsheetCreator()`
is [here](https://github.com/jtrim-ons/accessible-spreadsheet-creator/blob/main/docs/README.md).

## Developing the package

The following notes are for developing the `accessible-spreadsheet-creator` package.

### How to build it

- The original template spreadsheet, created in LibreOffice, is `template-spreadsheets/download-template.ods`.
- Run `scripts/unzip-spreadsheet.sh` to unzip this into `template-spreadsheets/unzipped-formatted/`.
- Run `scripts/apply-patch.sh` to create `template-spreadsheets/mustache`.
- Run `scripts/create-json.sh` to create a JavaScript object with filenames as keys and these templates as values.

### How to modify the spreadsheet and template

- Update `template-spreadsheets/download-template.ods`
- Run `scripts/apply-patch.sh`; fix the patch and re-run if there are problems
- Modify the files in `template-spreadsheets/mustache/`
- Run `scripts/create-patch.sh`
- Run `git diff` to check if the changes look sensible

### The Schema

`ods-data.schema.json` is a JSON Schema for the input to the accessible spreadsheet creator function. To create the docs, run `npm run make-schema-docs`. To turn the schema JSON into an importable JS file, run `./scripts/create-schema-js.sh`.

### TODO

Put thumbnail.png back in?
