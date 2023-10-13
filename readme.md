# Accessible Spreadsheet Creator

## How to use it

TODO

## How to build it

- The original template spreadsheet, created in LibreOffice, is `template-spreadsheets/download-template.ods`.
- Run `scripts/unzip-spreadsheet.sh` to unzip this into `template-spreadsheets/unzipped-formatted/`.
- Run `scripts/apply-patch.sh` to create `template-spreadsheets/mustache`.
- Run `scripts/create-json.sh` to create a JavaScript object with filenames as keys and these templates as values.

## How to modify the spreadsheet and template

- Update `template-spreadsheets/download-template.ods`
- Run `scripts/apply-patch.sh`; fix the patch and re-run if there are problems
- Modify the files in `template-spreadsheets/mustache/`
- Run `scripts/create-patch.sh`
- Run `git diff` to check if the changes look sensible

## The Schema

`ods-data.schema.json` is a JSON Schema for the input to the accessible spreadsheet creator function.  To create the docs, run `npm run make-schema-docs`. To turn the schema JSON into an importable JS file, run `./scripts/create-schema-js.sh`.

## TODO

Put thumbnail.png back in?
