#!/bin/bash

curl "http://localhost:4741/fridges" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "fridge": {
      "ingredient_id": "'"${ID}"'"
    }
  }'

echo
