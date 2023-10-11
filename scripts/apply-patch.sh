#!/bin/bash

rm -rf template-spreadsheets/mustache/
cp -r template-spreadsheets/unzipped-formatted/ template-spreadsheets/mustache

patch < template-spreadsheets/mods.patch
