# Data column Schema

```txt
https://github.com/jtrim-ons/accessible-spreadsheet-creator#/properties/sheets/items/properties/columns/items
```

A column with its heading, number/text style and data.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                               |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [ods-data.schema.json\*](../ods-data.schema.json "open original schema") |

## items Type

`object` ([Data column](ods-data-properties-sheets-items-properties-data-columns-data-column.md))

# items Properties

| Property            | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                                                             |
| :------------------ | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [style](#style)     | `string` | Required | cannot be null | [Accessible Spreadsheet Creator](ods-data-properties-sheets-items-properties-data-columns-data-column-properties-numbertext-style.md "https://github.com/jtrim-ons/accessible-spreadsheet-creator#/properties/sheets/items/properties/columns/items/properties/style") |
| [heading](#heading) | `string` | Required | cannot be null | [Accessible Spreadsheet Creator](ods-data-properties-sheets-items-properties-data-columns-data-column-properties-column-heading.md "https://github.com/jtrim-ons/accessible-spreadsheet-creator#/properties/sheets/items/properties/columns/items/properties/heading") |
| [values](#values)   | Merged   | Required | cannot be null | [Accessible Spreadsheet Creator](ods-data-properties-sheets-items-properties-data-columns-data-column-properties-column-values.md "https://github.com/jtrim-ons/accessible-spreadsheet-creator#/properties/sheets/items/properties/columns/items/properties/values")   |

## style

'text'=text column; 'number\_with\_commas': integers with thousand separator; 'number\_1dp': numbers to 1 decimal place

`style`

*   is required

*   Type: `string` ([Number/text style](ods-data-properties-sheets-items-properties-data-columns-data-column-properties-numbertext-style.md))

*   cannot be null

*   defined in: [Accessible Spreadsheet Creator](ods-data-properties-sheets-items-properties-data-columns-data-column-properties-numbertext-style.md "https://github.com/jtrim-ons/accessible-spreadsheet-creator#/properties/sheets/items/properties/columns/items/properties/style")

### style Type

`string` ([Number/text style](ods-data-properties-sheets-items-properties-data-columns-data-column-properties-numbertext-style.md))

## heading

Table column heading. May contain notes in double square brackets.

`heading`

*   is required

*   Type: `string` ([Column heading](ods-data-properties-sheets-items-properties-data-columns-data-column-properties-column-heading.md))

*   cannot be null

*   defined in: [Accessible Spreadsheet Creator](ods-data-properties-sheets-items-properties-data-columns-data-column-properties-column-heading.md "https://github.com/jtrim-ons/accessible-spreadsheet-creator#/properties/sheets/items/properties/columns/items/properties/heading")

### heading Type

`string` ([Column heading](ods-data-properties-sheets-items-properties-data-columns-data-column-properties-column-heading.md))

## values

An array of text or numeric values

`values`

*   is required

*   Type: `array` ([Column values](ods-data-properties-sheets-items-properties-data-columns-data-column-properties-column-values.md))

*   cannot be null

*   defined in: [Accessible Spreadsheet Creator](ods-data-properties-sheets-items-properties-data-columns-data-column-properties-column-values.md "https://github.com/jtrim-ons/accessible-spreadsheet-creator#/properties/sheets/items/properties/columns/items/properties/values")

### values Type

`array` ([Column values](ods-data-properties-sheets-items-properties-data-columns-data-column-properties-column-values.md))

any of

*   [Untitled undefined type in Accessible Spreadsheet Creator](ods-data-properties-sheets-items-properties-data-columns-data-column-properties-column-values-anyof-0.md "check type definition")

*   [Untitled undefined type in Accessible Spreadsheet Creator](ods-data-properties-sheets-items-properties-data-columns-data-column-properties-column-values-anyof-1.md "check type definition")
