#!/bin/bash

set -euo pipefail

(
echo 'export default [';
sep=''


# mimetype needs to come first in the zip for magic filetype detection of .ods file
for f in mimetype META-INF/manifest.xml content.xml meta.xml styles.xml; do
    echo $sep
    sep=,
    echo '{"filename":' '"'$f'", "contents":'
    jq -Rs '.' template-spreadsheets/mustache/$f
    echo '}'
done

echo ']';
) > template-spreadsheets/template.js
