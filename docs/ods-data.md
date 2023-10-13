# Accessible Spreadsheet Creator Schema

```txt
https://github.com/jtrim-ons/accessible-spreadsheet-creator
```

A description of an accessible spreadsheet

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                             |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [ods-data.schema.json](../ods-data.schema.json "open original schema") |

## Accessible Spreadsheet Creator Type

`object` ([Accessible Spreadsheet Creator](ods-data.md))

# Accessible Spreadsheet Creator Properties

| Property                                  | Type     | Required | Nullable       | Defined by                                                                                                                                                                 |
| :---------------------------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [coverSheetTitle](#coversheettitle)       | `string` | Required | cannot be null | [Accessible Spreadsheet Creator](ods-data-properties-cover-sheet-title.md "https://github.com/jtrim-ons/accessible-spreadsheet-creator#/properties/coverSheetTitle")       |
| [coverSheetContents](#coversheetcontents) | `array`  | Required | cannot be null | [Accessible Spreadsheet Creator](ods-data-properties-cover-sheet-contents.md "https://github.com/jtrim-ons/accessible-spreadsheet-creator#/properties/coverSheetContents") |
| [notes](#notes)                           | `array`  | Optional | cannot be null | [Accessible Spreadsheet Creator](ods-data-properties-notes.md "https://github.com/jtrim-ons/accessible-spreadsheet-creator#/properties/notes")                             |
| [sheets](#sheets)                         | `array`  | Required | cannot be null | [Accessible Spreadsheet Creator](ods-data-properties-sheets.md "https://github.com/jtrim-ons/accessible-spreadsheet-creator#/properties/sheets")                           |

## coverSheetTitle

The title displayed in cell A1 of the workbook.

`coverSheetTitle`

*   is required

*   Type: `string` ([Cover sheet title](ods-data-properties-cover-sheet-title.md))

*   cannot be null

*   defined in: [Accessible Spreadsheet Creator](ods-data-properties-cover-sheet-title.md "https://github.com/jtrim-ons/accessible-spreadsheet-creator#/properties/coverSheetTitle")

### coverSheetTitle Type

`string` ([Cover sheet title](ods-data-properties-cover-sheet-title.md))

### coverSheetTitle Constraints

**minimum length**: the minimum number of characters for this string is: `1`

## coverSheetContents

The lines below the cover sheet title. Each can be a subtitle starting with '## ', a link in Markdown style, or just text.

`coverSheetContents`

*   is required

*   Type: `string[]`

*   cannot be null

*   defined in: [Accessible Spreadsheet Creator](ods-data-properties-cover-sheet-contents.md "https://github.com/jtrim-ons/accessible-spreadsheet-creator#/properties/coverSheetContents")

### coverSheetContents Type

`string[]`

## notes

The notes each with a name that can be reffered to in double square brackets and text.

`notes`

*   is optional

*   Type: `object[]` ([Details](ods-data-properties-notes-items.md))

*   cannot be null

*   defined in: [Accessible Spreadsheet Creator](ods-data-properties-notes.md "https://github.com/jtrim-ons/accessible-spreadsheet-creator#/properties/notes")

### notes Type

`object[]` ([Details](ods-data-properties-notes-items.md))

## sheets

The data an metadata for the worksheets other than cover, contents and notes sheets.

`sheets`

*   is required

*   Type: `object[]` ([Details](ods-data-properties-sheets-items.md))

*   cannot be null

*   defined in: [Accessible Spreadsheet Creator](ods-data-properties-sheets.md "https://github.com/jtrim-ons/accessible-spreadsheet-creator#/properties/sheets")

### sheets Type

`object[]` ([Details](ods-data-properties-sheets-items.md))
