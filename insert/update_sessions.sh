#!/bin/bash

cd /Users/hyunjoo/Dev/DemoDev/RealCoaching/insert

# Update sessions 1-30
for i in {1..30}; do
    file="insert_session${i}.txt"
    idx=$((i-1))

    name=$(sed -n "$((idx*2+1))p" name)
    dev=$(sed -n "$((idx*2+1))p" development)
    team=$(sed -n "$((idx*2+1))p" team)

    # Create temp file and update
    sed "16s/.*/      \"content\": \"${name}, 남성, 25세\"/" "$file" | \
    sed "24s/.*/      \"content\": \"${dev}\"/" | \
    sed "32s/.*/      \"content\": \"${team}\"/" > "${file}.tmp"

    mv "${file}.tmp" "$file"

    echo "Updated $file with: $name"
done

echo "All 30 files updated successfully!"
