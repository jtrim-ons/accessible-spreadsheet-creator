# Accessible Spreadsheet Creator

## How to use it

TODO

## How to build it

- The original template spreadsheet, created in LibreOffice, is `template-spreadsheets/download-template.ods`.
- Run `scripts/unzip-spreadsheet.sh` to unzip this into `template-spreadsheets/unzipped-formatted/`.
- Run `scripts/apply-patch.sh` to create `template-spreadsheets/handlebars`.
- Run `scripts/create-json.sh` to create a JavaScript object with filenames as keys and these templates as values.

## How to modify the spreadsheet and template

- Update `template-spreadsheets/download-template.ods`
- Run `scripts/apply-patch.sh`; fix the patch and re-run if there are problems
- Modify the files in `template-spreadsheets/handlebars/`
- Run `scripts/create-patch.sh`
- Run `git diff` to check if the changes look sensible

## TODO

Put thumbnail.png back in.
