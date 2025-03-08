#!/bin/bash
set -e
readonly service="$1"

openapi --input api/"$service".yaml -o web/src/generated