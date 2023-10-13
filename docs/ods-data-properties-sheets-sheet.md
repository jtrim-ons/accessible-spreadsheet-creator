# Sheet Schema

```txt
https://github.com/jtrim-ons/accessible-spreadsheet-creator#/properties/sheets/items
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                               |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [ods-data.schema.json\*](../ods-data.schema.json "open original schema") |

## items Type

`object` ([Sheet](ods-data-properties-sheets-sheet.md))

# items Properties

| Property                          | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                         |
| :-------------------------------- | :------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [sheetName](#sheetname)           | `string` | Required | cannot be null | [Accessible Spreadsheet Creator](ods-data-properties-sheets-sheet-properties-sheet-name.md "https://github.com/jtrim-ons/accessible-spreadsheet-creator#/properties/sheets/items/properties/sheetName")            |
| [tableName](#tablename)           | `string` | Required | cannot be null | [Accessible Spreadsheet Creator](ods-data-properties-sheets-sheet-properties-table-name.md "https://github.com/jtrim-ons/accessible-spreadsheet-creator#/properties/sheets/items/properties/tableName")            |
| [sheetIntroText](#sheetintrotext) | `array`  | Optional | cannot be null | [Accessible Spreadsheet Creator](ods-data-properties-sheets-sheet-properties-sheet-intro-text.md "https://github.com/jtrim-ons/accessible-spreadsheet-creator#/properties/sheets/items/properties/sheetIntroText") |
| [columns](#columns)               | `array`  | Required | cannot be null | [Accessible Spreadsheet Creator](ods-data-properties-sheets-sheet-properties-data-columns.md "https://github.com/jtrim-ons/accessible-spreadsheet-creator#/properties/sheets/items/properties/columns")            |

## sheetName

The name to appear in cell A1

`sheetName`

*   is required

*   Type: `string` ([Sheet name](ods-data-properties-sheets-sheet-properties-sheet-name.md))

*   cannot be null

*   defined in: [Accessible Spreadsheet Creator](ods-data-properties-sheets-sheet-properties-sheet-name.md "https://github.com/jtrim-ons/accessible-spreadsheet-creator#/properties/sheets/items/properties/sheetName")

### sheetName Type

`string` ([Sheet name](ods-data-properties-sheets-sheet-properties-sheet-name.md))

### sheetName Constraints

**minimum length**: the minimum number of characters for this string is: `1`

## tableName

The name to give to the data table

`tableName`

*   is required

*   Type: `string` ([Table name](ods-data-properties-sheets-sheet-properties-table-name.md))

*   cannot be null

*   defined in: [Accessible Spreadsheet Creator](ods-data-properties-sheets-sheet-properties-table-name.md "https://github.com/jtrim-ons/accessible-spreadsheet-creator#/properties/sheets/items/properties/tableName")

### tableName Type

`string` ([Table name](ods-data-properties-sheets-sheet-properties-table-name.md))

### tableName Constraints

**minimum length**: the minimum number of characters for this string is: `1`

**pattern**: the string must match the following regular expression:&#x20;

```regexp
^[A-Za-z0-9_]*$
```

[try pattern](https://regexr.com/?expression=%5E%5BA-Za-z0-9_%5D*%24 "try regular expression with regexr.com")

## sheetIntroText

Introductory text to appear below cell A2

`sheetIntroText`

*   is optional

*   Type: `string[]`

*   cannot be null

*   defined in: [Accessible Spreadsheet Creator](ods-data-properties-sheets-sheet-properties-sheet-intro-text.md "https://github.com/jtrim-ons/accessible-spreadsheet-creator#/properties/sheets/items/properties/sheetIntroText")

### sheetIntroText Type

`string[]`

## columns



`columns`

*   is required

*   Type: `object[]` ([Data column](ods-data-properties-sheets-sheet-properties-data-columns-data-column.md))

*   cannot be null

*   defined in: [Accessible Spreadsheet Creator](ods-data-properties-sheets-sheet-properties-data-columns.md "https://github.com/jtrim-ons/accessible-spreadsheet-creator#/properties/sheets/items/properties/columns")

### columns Type

`object[]` ([Data column](ods-data-properties-sheets-sheet-properties-data-columns-data-column.md))
