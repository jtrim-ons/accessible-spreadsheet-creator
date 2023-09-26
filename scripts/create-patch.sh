#!/bin/bash

diff -u template-spreadsheets/unzipped-formatted/content.xml template-spreadsheets/handlebars/content.xml > template-spreadsheets/mods.patch.tmp
diff -u template-spreadsheets/unzipped-formatted/meta.xml template-spreadsheets/handlebars/meta.xml >> template-spreadsheets/mods.patch.tmp
diff -u template-spreadsheets/unzipped-formatted/settings.xml template-spreadsheets/handlebars/settings.xml >> template-spreadsheets/mods.patch.tmp

sed 's/unzipped-formatted/handlebars/' template-spreadsheets/mods.patch.tmp > template-spreadsheets/mods.patch

rm template-spreadsheets/mods.patch.tmp

