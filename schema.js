export default 
{
	"$id": "https://github.com/jtrim-ons/accessible-spreadsheet-creator",
	"title": "Accessible Spreadsheet Creator",
	"description": "A description of an accessible spreadsheet",
	"type": "object",
	"properties": {
		"coverSheetTitle": {
			"type": "string",
			"title": "Cover sheet title",
			"description": "The title displayed in cell A1 of the workbook.",
			"minLength": 1
		},
		"coverSheetContents": {
			"type": "array",
			"title": "Cover sheet contents",
			"description": "The lines below the cover sheet title. Each can be a subtitle starting with '## ', a link in Markdown style, or just text.",
			"items": {
				"type": "string"
			}
		},
		"notes": {
			"type": "array",
			"title": "Notes",
			"description": "The notes, each with a name that can be referred to in double square brackets and text.",
			"items": {
				"type": "object",
				"title": "Note",
				"properties": {
					"name": {
						"type": "string",
						"title": "Note name",
						"description": "A note name (e.g. note1) that can be referred to in a sheet using double square brackets (e.g. [[note1]])."
					},
					"text": {
						"type": "string",
						"title": "Note text",
						"description": "The text that will appear on the Notes page."
					}
				}
			}
		},
		"sheets": {
			"type": "array",
			"title": "Sheets",
			"description": "The data an metadata for the worksheets other than cover, contents and notes sheets.",
			"items": {
				"type": "object",
				"title": "Sheet",
				"properties": {
					"sheetName": {
						"type": "string",
						"minLength": 1,
						"title": "Sheet name",
						"description": "The name to appear in cell A1"
					},
					"tableName": {
						"type": "string",
						"minLength": 1,
						"title": "Table name",
						"description": "The name to give to the data table",
						"pattern": "^[A-Za-z0-9_]*$"
					},
					"sheetIntroText": {
						"type": "array",
						"title": "Sheet intro text",
						"description": "Introductory text to appear below cell A2",
						"items": {
							"type": "string"
						}
					},
					"columns": {
						"type": "array",
						"title": "Data columns",
						"items": {
							"type": "object",
							"title": "Data column",
							"description": "A column with its heading, number/text style and data.",
							"properties": {
								"style": {
									"type": "string",
									"title": "Number/text style",
									"description": "'text'=text column; 'number_with_commas': integers with thousand separator; 'number_1dp': numbers to 1 decimal place"
								},
								"heading": {
									"type": "string",
									"title": "Column heading",
									"description": "Table column heading. May contain notes in double square brackets."
								},
								"values": {
									"type": "array",
									"title": "Column values",
									"description": "An array of text or numeric values",
									"anyOf": [
										{ "items": { "type": "number" } },
										{ "items": { "type": "string" } }
									]
								}
							},
							"required": ["style", "heading", "values"]
						}
					}
				},
				"required": ["sheetName", "tableName", "columns"]
			}
		}
	},
	"required": ["coverSheetTitle", "coverSheetContents", "sheets"]
}
