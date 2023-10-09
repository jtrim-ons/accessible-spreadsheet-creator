#!/bin/bash

diff -u template-spreadsheets/unzipped-formatted/content.xml template-spreadsheets/handlebars/content.xml > template-spreadsheets/mods.patch.tmp
diff -u template-spreadsheets/unzipped-formatted/meta.xml template-spreadsheets/handlebars/meta.xml >> template-spreadsheets/mods.patch.tmp
diff -u template-spreadsheets/unzipped-formatted/META-INF/manifest.xml template-spreadsheets/handlebars/META-INF/manifest.xml >> template-spreadsheets/mods.patch.tmp

sed 's/unzipped-formatted/handlebars/' template-spreadsheets/mods.patch.tmp > template-spreadsheets/mods.patch

rm template-spreadsheets/mods.patch.tmp

