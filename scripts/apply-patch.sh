#!/bin/bash

for f in content meta settings; do
    cp template-spreadsheets/unzipped-formatted/$f.xml template-spreadsheets/handlebars
done

patch < template-spreadsheets/mods.patch
