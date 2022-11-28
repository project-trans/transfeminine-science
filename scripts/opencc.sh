#!/bin/bash
set -euo pipefail

SCRIPT_DIR=$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" &>/dev/null && pwd)

function cc() {
  local original="$1"
  local language="$2"
  local config="$3"
  local input="content/$original"
  local output="content.$language/$original"
  mkdir -p "$(dirname "$output")"
  opencc \
    --config "$config" \
    --input "$input" \
    --output "$output"
}

files=$(
  cd content || exit
  find . -type f -name '*.md'
)

for file in $files; do
  cc "$file" "zh-tw" "$SCRIPT_DIR/s2twp.json"
  cc "$file" "zh-hk" "s2hk"
done

opencc \
  --config "$SCRIPT_DIR/s2twp.json" \
  --input "data/abbreviation.zh-cn.yaml" \
  --output "data/abbreviation.zh-tw.yaml"

opencc \
  --config "s2hk" \
  --input "data/abbreviation.zh-cn.yaml" \
  --output "data/abbreviation.zh-hk.yaml"
