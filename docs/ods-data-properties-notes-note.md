# Note Schema

```txt
https://github.com/jtrim-ons/accessible-spreadsheet-creator#/properties/notes/items
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                               |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [ods-data.schema.json\*](../ods-data.schema.json "open original schema") |

## items Type

`object` ([Note](ods-data-properties-notes-note.md))

# items Properties

| Property      | Type     | Required | Nullable       | Defined by                                                                                                                                                                                     |
| :------------ | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [name](#name) | `string` | Optional | cannot be null | [Accessible Spreadsheet Creator](ods-data-properties-notes-note-properties-note-name.md "https://github.com/jtrim-ons/accessible-spreadsheet-creator#/properties/notes/items/properties/name") |
| [text](#text) | `string` | Optional | cannot be null | [Accessible Spreadsheet Creator](ods-data-properties-notes-note-properties-note-text.md "https://github.com/jtrim-ons/accessible-spreadsheet-creator#/properties/notes/items/properties/text") |

## name

A note name (e.g. note1) that can be referred to in a sheet using double square brackets (e.g. \[\[note1]]).

`name`

*   is optional

*   Type: `string` ([Note name](ods-data-properties-notes-note-properties-note-name.md))

*   cannot be null

*   defined in: [Accessible Spreadsheet Creator](ods-data-properties-notes-note-properties-note-name.md "https://github.com/jtrim-ons/accessible-spreadsheet-creator#/properties/notes/items/properties/name")

### name Type

`string` ([Note name](ods-data-properties-notes-note-properties-note-name.md))

## text

The text that will appear on the Notes page.

`text`

*   is optional

*   Type: `string` ([Note text](ods-data-properties-notes-note-properties-note-text.md))

*   cannot be null

*   defined in: [Accessible Spreadsheet Creator](ods-data-properties-notes-note-properties-note-text.md "https://github.com/jtrim-ons/accessible-spreadsheet-creator#/properties/notes/items/properties/text")

### text Type

`string` ([Note text](ods-data-properties-notes-note-properties-note-text.md))
