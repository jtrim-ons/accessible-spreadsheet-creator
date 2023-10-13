# Table name Schema

```txt
https://github.com/jtrim-ons/accessible-spreadsheet-creator#/properties/sheets/items/properties/tableName
```

The name to give to the data table

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                               |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [ods-data.schema.json\*](../ods-data.schema.json "open original schema") |

## tableName Type

`string` ([Table name](ods-data-properties-sheets-sheet-properties-table-name.md))

## tableName Constraints

**minimum length**: the minimum number of characters for this string is: `1`

**pattern**: the string must match the following regular expression:&#x20;

```regexp
^[A-Za-z0-9_]*$
```

[try pattern](https://regexr.com/?expression=%5E%5BA-Za-z0-9_%5D*%24 "try regular expression with regexr.com")
