#!/bin/bash

rm -rf template-spreadsheets/handlebars/
cp -r template-spreadsheets/unzipped-formatted/ template-spreadsheets/handlebars

patch < template-spreadsheets/mods.patch
