#!/bin/bash
set -e
readonly service="$1"

openapi-generator generate \
  -i api/"$service".yaml \
  -g typescript \
  -o web/src/generated \
  --additional-properties=supportsES6=true,typescriptThreePlus=true,modelPropertyNaming=original, \
