#!/bin/bash

diff -u template-spreadsheets/unzipped-formatted/content.xml template-spreadsheets/mustache/content.xml > template-spreadsheets/mods.patch.tmp
diff -u template-spreadsheets/unzipped-formatted/styles.xml template-spreadsheets/mustache/styles.xml >> template-spreadsheets/mods.patch.tmp
diff -u template-spreadsheets/unzipped-formatted/meta.xml template-spreadsheets/mustache/meta.xml >> template-spreadsheets/mods.patch.tmp
diff -u template-spreadsheets/unzipped-formatted/META-INF/manifest.xml template-spreadsheets/mustache/META-INF/manifest.xml >> template-spreadsheets/mods.patch.tmp

sed 's/unzipped-formatted/mustache/' template-spreadsheets/mods.patch.tmp > template-spreadsheets/mods.patch

rm template-spreadsheets/mods.patch.tmp

