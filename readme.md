# Accessible Spreadsheet Creator

## How to use it

TODO

## How to build it

- The original template spreadsheet, created in LibreOffice, is `template-spreadsheets/download-template.ods`.
- Run `scripts/unzip-spreadsheet.sh` to unzip this into `template-spreadsheets/unzipped-formatted/`.
- Make a copy of that directory called `template-spreadsheets/handlebars`, with sections converted into Handlebars templates.
- Run `scripts/create-json.sh` to create a JavaScript object with filenames as keys and these templates as values.
