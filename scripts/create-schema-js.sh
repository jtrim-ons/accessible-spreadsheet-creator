#!/bin/bash

set -euo pipefail

echo 'export default ' > schema.js
cat ods-data.schema.json >> schema.js
