#!/bin/bash

curl "http://localhost:4741/ingredients" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "fridge": {
      "name": "'"${NAME}"'",
      "unit": "'"${UNIT}"'"
    }
  }'

  echo
