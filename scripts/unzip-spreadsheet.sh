#!/bin/bash

rm -rf template-spreadsheets/unzipped/
unzip template-spreadsheets/download-template.ods -d template-spreadsheets/unzipped

rm -rf template-spreadsheets/unzipped-formatted
mkdir template-spreadsheets/unzipped-formatted

cd template-spreadsheets/unzipped
find . -type f -name '*' | while read f; do
    mkdir -p ../unzipped-formatted/$(dirname $f)
    cp $f ../unzipped-formatted/$f
done
find . -type f -name '*.xml' | while read f; do
    mkdir -p ../unzipped-formatted/$(dirname $f)
    xmllint --format $f > ../unzipped-formatted/$f
done
cd ../..
