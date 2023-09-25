#!/bin/bash

set -euo pipefail

cd template-spreadsheets/handlebars

(
echo 'export default [';
sep=''

find . -type f | grep -v 'DS_Store' | grep -v '.png$' | while read f; do
    echo $sep
    sep=,
    echo '{"filename":' '"'$(echo $f | sed 's_^./__')'", "contents":'
    jq -Rs '.' $f
    echo '}'
done

echo ']';
) > ../template.js

cd ../..
