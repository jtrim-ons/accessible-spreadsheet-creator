export default [

{"filename": "content.xml", "contents":
"<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<office:document-content xmlns:presentation=\"urn:oasis:names:tc:opendocument:xmlns:presentation:1.0\" xmlns:css3t=\"http://www.w3.org/TR/css3-text/\" xmlns:grddl=\"http://www.w3.org/2003/g/data-view#\" xmlns:xhtml=\"http://www.w3.org/1999/xhtml\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" xmlns:xforms=\"http://www.w3.org/2002/xforms\" xmlns:dom=\"http://www.w3.org/2001/xml-events\" xmlns:script=\"urn:oasis:names:tc:opendocument:xmlns:script:1.0\" xmlns:form=\"urn:oasis:names:tc:opendocument:xmlns:form:1.0\" xmlns:math=\"http://www.w3.org/1998/Math/MathML\" xmlns:number=\"urn:oasis:names:tc:opendocument:xmlns:datastyle:1.0\" xmlns:field=\"urn:openoffice:names:experimental:ooo-ms-interop:xmlns:field:1.0\" xmlns:meta=\"urn:oasis:names:tc:opendocument:xmlns:meta:1.0\" xmlns:loext=\"urn:org:documentfoundation:names:experimental:office:xmlns:loext:1.0\" xmlns:table=\"urn:oasis:names:tc:opendocument:xmlns:table:1.0\" xmlns:chart=\"urn:oasis:names:tc:opendocument:xmlns:chart:1.0\" xmlns:tableooo=\"http://openoffice.org/2009/table\" xmlns:draw=\"urn:oasis:names:tc:opendocument:xmlns:drawing:1.0\" xmlns:rpt=\"http://openoffice.org/2005/report\" xmlns:dr3d=\"urn:oasis:names:tc:opendocument:xmlns:dr3d:1.0\" xmlns:of=\"urn:oasis:names:tc:opendocument:xmlns:of:1.2\" xmlns:text=\"urn:oasis:names:tc:opendocument:xmlns:text:1.0\" xmlns:style=\"urn:oasis:names:tc:opendocument:xmlns:style:1.0\" xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:calcext=\"urn:org:documentfoundation:names:experimental:calc:xmlns:calcext:1.0\" xmlns:oooc=\"http://openoffice.org/2004/calc\" xmlns:drawooo=\"http://openoffice.org/2010/draw\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:ooo=\"http://openoffice.org/2004/office\" xmlns:ooow=\"http://openoffice.org/2004/writer\" xmlns:fo=\"urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0\" xmlns:formx=\"urn:openoffice:names:experimental:ooxml-odf-interop:xmlns:form:1.0\" xmlns:svg=\"urn:oasis:names:tc:opendocument:xmlns:svg-compatible:1.0\" xmlns:office=\"urn:oasis:names:tc:opendocument:xmlns:office:1.0\" office:version=\"1.3\">\n  <office:scripts/>\n  <office:font-face-decls>\n    <style:font-face style:name=\"Arial\" svg:font-family=\"Arial\" style:font-adornments=\"Regular\" style:font-family-generic=\"swiss\" style:font-pitch=\"variable\"/>\n    <style:font-face style:name=\"Liberation Sans\" svg:font-family=\"'Liberation Sans'\" style:font-family-generic=\"swiss\" style:font-pitch=\"variable\"/>\n    <style:font-face style:name=\"Arial Unicode MS\" svg:font-family=\"'Arial Unicode MS'\" style:font-family-generic=\"system\" style:font-pitch=\"variable\"/>\n    <style:font-face style:name=\"PingFang SC\" svg:font-family=\"'PingFang SC'\" style:font-family-generic=\"system\" style:font-pitch=\"variable\"/>\n  </office:font-face-decls>\n  <office:automatic-styles>\n    <style:style style:name=\"co1\" style:family=\"table-column\">\n      <style:table-column-properties fo:break-before=\"auto\" style:column-width=\"2.258cm\"/>\n    </style:style>\n{{#each sheets}}\n    <style:style style:name=\"{{firstColumnStyleName}}\" style:family=\"table-column\">\n      <style:table-column-properties fo:break-before=\"auto\" style:column-width=\"{{firstColumnWidthCm}}cm\"/>\n    </style:style>\n{{/each}}\n    <style:style style:name=\"ro1\" style:family=\"table-row\">\n      <style:table-row-properties style:row-height=\"0.778cm\" fo:break-before=\"auto\" style:use-optimal-row-height=\"true\"/>\n    </style:style>\n    <style:style style:name=\"ro2\" style:family=\"table-row\">\n      <style:table-row-properties style:row-height=\"0.529cm\" fo:break-before=\"auto\" style:use-optimal-row-height=\"true\"/>\n    </style:style>\n    <style:style style:name=\"ta1\" style:family=\"table\" style:master-page-name=\"Default\">\n      <style:table-properties table:display=\"true\" style:writing-mode=\"lr-tb\"/>\n    </style:style>\n    <style:style style:name=\"ce3\" style:family=\"table-cell\" style:parent-style-name=\"Default\" style:data-style-name=\"N111\"/>\n  </office:automatic-styles>\n  <office:body>\n    <office:spreadsheet>\n      <table:calculation-settings table:automatic-find-labels=\"false\" table:use-regular-expressions=\"false\" table:use-wildcards=\"true\"/>\n      <table:table table:name=\"Cover sheet\" table:style-name=\"ta1\">\n        <table:table-column table:style-name=\"co1\" table:number-columns-repeated=\"2\" table:default-cell-style-name=\"Default\"/>\n        <table:table-row table:style-name=\"ro1\">\n          <table:table-cell table:style-name=\"Heading_20_1\" office:value-type=\"string\" calcext:value-type=\"string\">\n            <text:p>Cover sheet title</text:p>\n          </table:table-cell>\n          <table:table-cell/>\n        </table:table-row>\n        <table:table-row table:style-name=\"ro2\">\n          <table:table-cell table:number-columns-repeated=\"2\"/>\n        </table:table-row>\n        <table:table-row table:style-name=\"ro2\">\n          <table:table-cell office:value-type=\"string\" calcext:value-type=\"string\">\n            <text:p>a</text:p>\n          </table:table-cell>\n          <table:table-cell office:value-type=\"string\" calcext:value-type=\"string\">\n            <text:p>b</text:p>\n          </table:table-cell>\n        </table:table-row>\n{{#each selectedCharacteristics}}\n        <table:table-row table:style-name=\"ro2\">\n          <table:table-cell office:value-type=\"string\" calcext:value-type=\"string\">\n            <text:p>{{variable}}</text:p>\n          </table:table-cell>\n          <table:table-cell office:value-type=\"string\" calcext:value-type=\"string\">\n            <text:p>{{category}}</text:p>\n          </table:table-cell>\n        </table:table-row>\n{{/each}}\n      </table:table>\n      <table:table table:name=\"Contents\" table:style-name=\"ta1\">\n        <table:table-column table:style-name=\"co1\" table:number-columns-repeated=\"2\" table:default-cell-style-name=\"Default\"/>\n        <table:table-row table:style-name=\"ro1\">\n          <table:table-cell table:style-name=\"Heading_20_1\" office:value-type=\"string\" calcext:value-type=\"string\">\n            <text:p>Contents</text:p>\n          </table:table-cell>\n          <table:table-cell/>\n        </table:table-row>\n        <table:table-row table:style-name=\"ro2\">\n          <table:table-cell table:number-columns-repeated=\"2\"/>\n        </table:table-row>\n        <table:table-row table:style-name=\"ro2\">\n          <table:table-cell office:value-type=\"string\" calcext:value-type=\"string\">\n            <text:p>a</text:p>\n          </table:table-cell>\n          <table:table-cell office:value-type=\"string\" calcext:value-type=\"string\">\n            <text:p>b</text:p>\n          </table:table-cell>\n        </table:table-row>\n{{#each sheets}}\n        <table:table-row table:style-name=\"ro2\">\n          <table:table-cell office:value-type=\"string\" calcext:value-type=\"string\">\n            <text:p>{{sheetName}}</text:p>\n          </table:table-cell>\n          <table:table-cell office:value-type=\"string\" calcext:value-type=\"string\">\n            <text:p>\n              <text:a xlink:href=\"#{{sheetName}}\" xlink:type=\"simple\">{{sheetName}}</text:a>\n            </text:p>\n          </table:table-cell>\n        </table:table-row>\n{{/each}}\n      </table:table>\n{{#each sheets}}\n      <table:table table:name=\"{{sheetName}}\" table:style-name=\"ta1\">\n        <table:table-column table:style-name=\"{{firstColumnStyleName}}\" table:default-cell-style-name=\"Default\"/>\n        <table:table-column table:style-name=\"co1\" table:number-columns-repeated=\"2\" table:default-cell-style-name=\"Default\"/>\n        <table:table-row table:style-name=\"ro1\">\n          <table:table-cell table:style-name=\"Heading_20_1\" office:value-type=\"string\" calcext:value-type=\"string\">\n            <text:p>{{sheetName}} (generated title)</text:p>\n          </table:table-cell>\n          <table:table-cell table:number-columns-repeated=\"2\"/>\n        </table:table-row>\n        <table:table-row table:style-name=\"ro2\">\n          <table:table-cell table:number-columns-repeated=\"3\"/>\n        </table:table-row>\n        <table:table-row table:style-name=\"ro2\">\n{{#each ../tableHeadings}}\n          <table:table-cell office:value-type=\"string\" calcext:value-type=\"string\">\n            <text:p>{{this}}</text:p>\n          </table:table-cell>\n{{/each}}\n        </table:table-row>\n{{#each rowData}}\n        <table:table-row table:style-name=\"ro2\">\n          <table:table-cell office:value-type=\"string\" calcext:value-type=\"string\">\n            <text:p>{{name}}</text:p>\n          </table:table-cell>\n{{#each values}}\n          <table:table-cell table:style-name=\"ce3\" office:value-type=\"float\" office:value=\"{{this}}\" calcext:value-type=\"float\">\n            <text:p>{{this}}</text:p>\n          </table:table-cell>\n{{/each}}\n        </table:table-row>\n{{/each}}\n      </table:table>\n{{/each}}\n      <table:named-expressions/>\n      <table:database-ranges>\n        <table:database-range table:name=\"selected_characteristics\" table:target-range-address=\"'Cover sheet'.{{firstCharacteristicsCell}}:'Cover sheet'.{{lastCharacteristicsCell}}\" table:on-update-keep-styles=\"true\" table:on-update-keep-size=\"false\" table:orientation=\"column\"/>\n        <table:database-range table:name=\"table_of_contents\" table:target-range-address=\"'Contents'.{{firstTocCell}}:'Contents'.{{lastTocCell}}\" table:on-update-keep-styles=\"true\" table:on-update-keep-size=\"false\" table:orientation=\"column\"/>\n{{#each sheets}}\n        <table:database-range table:name=\"{{tableName}}\" table:target-range-address=\"'{{sheetName}}'.{{firstTableCell}}:'{{sheetName}}'.{{lastTableCell}}\" table:on-update-keep-styles=\"true\" table:on-update-keep-size=\"false\" table:orientation=\"column\"/>\n{{/each}}\n      </table:database-ranges>\n    </office:spreadsheet>\n  </office:body>\n</office:document-content>\n"
}
,
{"filename": "meta.xml", "contents":
"<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<office:document-meta xmlns:grddl=\"http://www.w3.org/2003/g/data-view#\" xmlns:meta=\"urn:oasis:names:tc:opendocument:xmlns:meta:1.0\" xmlns:ooo=\"http://openoffice.org/2004/office\" xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:office=\"urn:oasis:names:tc:opendocument:xmlns:office:1.0\" office:version=\"1.3\">\n  <office:meta>\n    <meta:creation-date>2023-09-21T12:53:29.924750298</meta:creation-date>\n    <dc:date>2023-09-28T11:47:04.527514513</dc:date>\n    <meta:editing-duration>PT6M31S</meta:editing-duration>\n    <meta:editing-cycles>8</meta:editing-cycles>\n    <meta:generator>LibreOffice/7.0.6.2$MacOSX_X86_64 LibreOffice_project/144abb84a525d8e30c9dbbefa69cbbf2d8d4ae3b</meta:generator>\n    <meta:document-statistic meta:table-count=\"{{tableCount}}\" meta:object-count=\"0\"/>\n  </office:meta>\n</office:document-meta>\n"
}
,
{"filename": "META-INF/manifest.xml", "contents":
"<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<manifest:manifest xmlns:manifest=\"urn:oasis:names:tc:opendocument:xmlns:manifest:1.0\" xmlns:loext=\"urn:org:documentfoundation:names:experimental:office:xmlns:loext:1.0\" manifest:version=\"1.3\">\n  <manifest:file-entry manifest:full-path=\"/\" manifest:version=\"1.3\" manifest:media-type=\"application/vnd.oasis.opendocument.spreadsheet\"/>\n  <manifest:file-entry manifest:full-path=\"meta.xml\" manifest:media-type=\"text/xml\"/>\n  <manifest:file-entry manifest:full-path=\"styles.xml\" manifest:media-type=\"text/xml\"/>\n  <manifest:file-entry manifest:full-path=\"Configurations2/\" manifest:media-type=\"application/vnd.sun.xml.ui.configuration\"/>\n  <manifest:file-entry manifest:full-path=\"manifest.rdf\" manifest:media-type=\"application/rdf+xml\"/>\n  <manifest:file-entry manifest:full-path=\"content.xml\" manifest:media-type=\"text/xml\"/>\n  <manifest:file-entry manifest:full-path=\"settings.xml\" manifest:media-type=\"text/xml\"/>\n  <manifest:file-entry manifest:full-path=\"Thumbnails/thumbnail.png\" manifest:media-type=\"image/png\"/>\n</manifest:manifest>\n"
}
,
{"filename": "styles.xml", "contents":
"<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<office:document-styles xmlns:presentation=\"urn:oasis:names:tc:opendocument:xmlns:presentation:1.0\" xmlns:css3t=\"http://www.w3.org/TR/css3-text/\" xmlns:grddl=\"http://www.w3.org/2003/g/data-view#\" xmlns:xhtml=\"http://www.w3.org/1999/xhtml\" xmlns:dom=\"http://www.w3.org/2001/xml-events\" xmlns:script=\"urn:oasis:names:tc:opendocument:xmlns:script:1.0\" xmlns:form=\"urn:oasis:names:tc:opendocument:xmlns:form:1.0\" xmlns:math=\"http://www.w3.org/1998/Math/MathML\" xmlns:number=\"urn:oasis:names:tc:opendocument:xmlns:datastyle:1.0\" xmlns:field=\"urn:openoffice:names:experimental:ooo-ms-interop:xmlns:field:1.0\" xmlns:meta=\"urn:oasis:names:tc:opendocument:xmlns:meta:1.0\" xmlns:loext=\"urn:org:documentfoundation:names:experimental:office:xmlns:loext:1.0\" xmlns:table=\"urn:oasis:names:tc:opendocument:xmlns:table:1.0\" xmlns:chart=\"urn:oasis:names:tc:opendocument:xmlns:chart:1.0\" xmlns:tableooo=\"http://openoffice.org/2009/table\" xmlns:draw=\"urn:oasis:names:tc:opendocument:xmlns:drawing:1.0\" xmlns:rpt=\"http://openoffice.org/2005/report\" xmlns:dr3d=\"urn:oasis:names:tc:opendocument:xmlns:dr3d:1.0\" xmlns:of=\"urn:oasis:names:tc:opendocument:xmlns:of:1.2\" xmlns:text=\"urn:oasis:names:tc:opendocument:xmlns:text:1.0\" xmlns:style=\"urn:oasis:names:tc:opendocument:xmlns:style:1.0\" xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:calcext=\"urn:org:documentfoundation:names:experimental:calc:xmlns:calcext:1.0\" xmlns:oooc=\"http://openoffice.org/2004/calc\" xmlns:drawooo=\"http://openoffice.org/2010/draw\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:ooo=\"http://openoffice.org/2004/office\" xmlns:ooow=\"http://openoffice.org/2004/writer\" xmlns:fo=\"urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0\" xmlns:svg=\"urn:oasis:names:tc:opendocument:xmlns:svg-compatible:1.0\" xmlns:office=\"urn:oasis:names:tc:opendocument:xmlns:office:1.0\" office:version=\"1.3\">\n  <office:font-face-decls>\n    <style:font-face style:name=\"Arial\" svg:font-family=\"Arial\" style:font-adornments=\"Regular\" style:font-family-generic=\"swiss\" style:font-pitch=\"variable\"/>\n    <style:font-face style:name=\"Liberation Sans\" svg:font-family=\"'Liberation Sans'\" style:font-family-generic=\"swiss\" style:font-pitch=\"variable\"/>\n    <style:font-face style:name=\"Arial Unicode MS\" svg:font-family=\"'Arial Unicode MS'\" style:font-family-generic=\"system\" style:font-pitch=\"variable\"/>\n    <style:font-face style:name=\"PingFang SC\" svg:font-family=\"'PingFang SC'\" style:font-family-generic=\"system\" style:font-pitch=\"variable\"/>\n  </office:font-face-decls>\n  <office:styles>\n    <style:default-style style:family=\"table-cell\">\n      <style:paragraph-properties style:tab-stop-distance=\"1.25cm\"/>\n      <style:text-properties style:font-name=\"Liberation Sans\" fo:language=\"en\" fo:country=\"GB\" style:font-name-asian=\"PingFang SC\" style:language-asian=\"zh\" style:country-asian=\"CN\" style:font-name-complex=\"Arial Unicode MS\" style:language-complex=\"hi\" style:country-complex=\"IN\"/>\n    </style:default-style>\n    <number:number-style style:name=\"N0\">\n      <number:number number:min-integer-digits=\"1\"/>\n    </number:number-style>\n    <number:number-style style:name=\"N111\">\n      <number:number number:decimal-places=\"1\" number:min-decimal-places=\"1\" number:min-integer-digits=\"1\"/>\n    </number:number-style>\n    <style:style style:name=\"Default\" style:family=\"table-cell\">\n      <style:text-properties style:font-name=\"Arial\" fo:font-family=\"Arial\" style:font-style-name=\"Regular\" style:font-family-generic=\"swiss\" style:font-pitch=\"variable\" fo:font-size=\"12pt\"/>\n    </style:style>\n    <style:style style:name=\"Heading\" style:family=\"table-cell\" style:parent-style-name=\"Default\">\n      <style:text-properties fo:color=\"#000000\" fo:font-size=\"24pt\" fo:font-style=\"normal\" fo:font-weight=\"bold\"/>\n    </style:style>\n    <style:style style:name=\"Heading_20_1\" style:display-name=\"Heading 1\" style:family=\"table-cell\" style:parent-style-name=\"Heading\">\n      <style:text-properties fo:color=\"#000000\" fo:font-size=\"18pt\" fo:font-style=\"normal\" fo:font-weight=\"normal\"/>\n    </style:style>\n    <style:style style:name=\"Heading_20_2\" style:display-name=\"Heading 2\" style:family=\"table-cell\" style:parent-style-name=\"Heading\">\n      <style:text-properties fo:color=\"#000000\" fo:font-size=\"14pt\" fo:font-style=\"normal\" fo:font-weight=\"normal\"/>\n    </style:style>\n    <style:style style:name=\"Text\" style:family=\"table-cell\" style:parent-style-name=\"Default\"/>\n    <style:style style:name=\"Note\" style:family=\"table-cell\" style:parent-style-name=\"Text\">\n      <style:table-cell-properties fo:background-color=\"#ffffcc\" style:diagonal-bl-tr=\"none\" style:diagonal-tl-br=\"none\" fo:border=\"0.74pt solid #808080\"/>\n      <style:text-properties fo:color=\"#333333\" fo:font-size=\"10pt\" fo:font-style=\"normal\" fo:font-weight=\"normal\"/>\n    </style:style>\n    <style:style style:name=\"Footnote\" style:family=\"table-cell\" style:parent-style-name=\"Text\">\n      <style:text-properties fo:color=\"#808080\" fo:font-size=\"10pt\" fo:font-style=\"italic\" fo:font-weight=\"normal\"/>\n    </style:style>\n    <style:style style:name=\"Hyperlink\" style:family=\"table-cell\" style:parent-style-name=\"Text\">\n      <style:text-properties fo:color=\"#0000ee\" fo:font-size=\"10pt\" fo:font-style=\"normal\" style:text-underline-style=\"solid\" style:text-underline-width=\"auto\" style:text-underline-color=\"#0000ee\" fo:font-weight=\"normal\"/>\n    </style:style>\n    <style:style style:name=\"Status\" style:family=\"table-cell\" style:parent-style-name=\"Default\"/>\n    <style:style style:name=\"Good\" style:family=\"table-cell\" style:parent-style-name=\"Status\">\n      <style:table-cell-properties fo:background-color=\"#ccffcc\"/>\n      <style:text-properties fo:color=\"#006600\" fo:font-size=\"10pt\" fo:font-style=\"normal\" fo:font-weight=\"normal\"/>\n    </style:style>\n    <style:style style:name=\"Neutral\" style:family=\"table-cell\" style:parent-style-name=\"Status\">\n      <style:table-cell-properties fo:background-color=\"#ffffcc\"/>\n      <style:text-properties fo:color=\"#996600\" fo:font-size=\"10pt\" fo:font-style=\"normal\" fo:font-weight=\"normal\"/>\n    </style:style>\n    <style:style style:name=\"Bad\" style:family=\"table-cell\" style:parent-style-name=\"Status\">\n      <style:table-cell-properties fo:background-color=\"#ffcccc\"/>\n      <style:text-properties fo:color=\"#cc0000\" fo:font-size=\"10pt\" fo:font-style=\"normal\" fo:font-weight=\"normal\"/>\n    </style:style>\n    <style:style style:name=\"Warning\" style:family=\"table-cell\" style:parent-style-name=\"Status\">\n      <style:text-properties fo:color=\"#cc0000\" fo:font-size=\"10pt\" fo:font-style=\"normal\" fo:font-weight=\"normal\"/>\n    </style:style>\n    <style:style style:name=\"Error\" style:family=\"table-cell\" style:parent-style-name=\"Status\">\n      <style:table-cell-properties fo:background-color=\"#cc0000\"/>\n      <style:text-properties fo:color=\"#ffffff\" fo:font-size=\"10pt\" fo:font-style=\"normal\" fo:font-weight=\"bold\"/>\n    </style:style>\n    <style:style style:name=\"Accent\" style:family=\"table-cell\" style:parent-style-name=\"Default\">\n      <style:text-properties fo:color=\"#000000\" fo:font-size=\"10pt\" fo:font-style=\"normal\" fo:font-weight=\"bold\"/>\n    </style:style>\n    <style:style style:name=\"Accent_20_1\" style:display-name=\"Accent 1\" style:family=\"table-cell\" style:parent-style-name=\"Accent\">\n      <style:table-cell-properties fo:background-color=\"#000000\"/>\n      <style:text-properties fo:color=\"#ffffff\" fo:font-size=\"10pt\" fo:font-style=\"normal\" fo:font-weight=\"normal\"/>\n    </style:style>\n    <style:style style:name=\"Accent_20_2\" style:display-name=\"Accent 2\" style:family=\"table-cell\" style:parent-style-name=\"Accent\">\n      <style:table-cell-properties fo:background-color=\"#808080\"/>\n      <style:text-properties fo:color=\"#ffffff\" fo:font-size=\"10pt\" fo:font-style=\"normal\" fo:font-weight=\"normal\"/>\n    </style:style>\n    <style:style style:name=\"Accent_20_3\" style:display-name=\"Accent 3\" style:family=\"table-cell\" style:parent-style-name=\"Accent\">\n      <style:table-cell-properties fo:background-color=\"#dddddd\"/>\n    </style:style>\n    <style:style style:name=\"Result\" style:family=\"table-cell\" style:parent-style-name=\"Default\">\n      <style:text-properties fo:color=\"#000000\" fo:font-size=\"10pt\" fo:font-style=\"italic\" style:text-underline-style=\"solid\" style:text-underline-width=\"auto\" style:text-underline-color=\"#000000\" fo:font-weight=\"bold\"/>\n    </style:style>\n  </office:styles>\n  <office:automatic-styles>\n    <style:page-layout style:name=\"Mpm1\">\n      <style:page-layout-properties style:writing-mode=\"lr-tb\"/>\n      <style:header-style>\n        <style:header-footer-properties fo:min-height=\"0.75cm\" fo:margin-left=\"0cm\" fo:margin-right=\"0cm\" fo:margin-bottom=\"0.25cm\"/>\n      </style:header-style>\n      <style:footer-style>\n        <style:header-footer-properties fo:min-height=\"0.75cm\" fo:margin-left=\"0cm\" fo:margin-right=\"0cm\" fo:margin-top=\"0.25cm\"/>\n      </style:footer-style>\n    </style:page-layout>\n    <style:page-layout style:name=\"Mpm2\">\n      <style:page-layout-properties style:writing-mode=\"lr-tb\"/>\n      <style:header-style>\n        <style:header-footer-properties fo:min-height=\"0.75cm\" fo:margin-left=\"0cm\" fo:margin-right=\"0cm\" fo:margin-bottom=\"0.25cm\" fo:border=\"2.49pt solid #000000\" fo:padding=\"0.018cm\" fo:background-color=\"#c0c0c0\">\n          <style:background-image/>\n        </style:header-footer-properties>\n      </style:header-style>\n      <style:footer-style>\n        <style:header-footer-properties fo:min-height=\"0.75cm\" fo:margin-left=\"0cm\" fo:margin-right=\"0cm\" fo:margin-top=\"0.25cm\" fo:border=\"2.49pt solid #000000\" fo:padding=\"0.018cm\" fo:background-color=\"#c0c0c0\">\n          <style:background-image/>\n        </style:header-footer-properties>\n      </style:footer-style>\n    </style:page-layout>\n  </office:automatic-styles>\n  <office:master-styles>\n    <style:master-page style:name=\"Default\" style:page-layout-name=\"Mpm1\">\n      <style:header>\n        <text:p>\n          <text:sheet-name>???</text:sheet-name>\n        </text:p>\n      </style:header>\n      <style:header-left style:display=\"false\"/>\n      <style:footer>\n        <text:p>Page <text:page-number>1</text:page-number></text:p>\n      </style:footer>\n      <style:footer-left style:display=\"false\"/>\n    </style:master-page>\n    <style:master-page style:name=\"Report\" style:page-layout-name=\"Mpm2\">\n      <style:header>\n        <style:region-left>\n          <text:p><text:sheet-name>???</text:sheet-name><text:s/>(<text:title>???</text:title>)</text:p>\n        </style:region-left>\n        <style:region-right>\n          <text:p><text:date style:data-style-name=\"N2\" text:date-value=\"2023-09-28\">00/00/0000</text:date>, <text:time style:data-style-name=\"N2\" text:time-value=\"11:46:49.533334484\">00:00:00</text:time></text:p>\n        </style:region-right>\n      </style:header>\n      <style:header-left style:display=\"false\"/>\n      <style:footer>\n        <text:p>Page <text:page-number>1</text:page-number><text:s/>/ <text:page-count>99</text:page-count></text:p>\n      </style:footer>\n      <style:footer-left style:display=\"false\"/>\n    </style:master-page>\n  </office:master-styles>\n</office:document-styles>\n"
}
,
{"filename": "mimetype", "contents":
"application/vnd.oasis.opendocument.spreadsheet"
}
]
