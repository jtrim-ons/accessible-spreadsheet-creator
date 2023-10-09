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

# Excel doesn't include these files when it saves as .ods,
# so hopefully it's okay if we don't either.
rm ../unzipped-formatted/manifest.rdf
rm ../unzipped-formatted/settings.xml

cd ../..
