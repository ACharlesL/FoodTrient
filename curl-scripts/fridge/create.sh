#!/bin/bash

curl --include --request POST 'http://localhost:4741/fridges' \
  --header "Content-Type: application/json" \
  --data '{
    "fridge": {
      "name": "'"${NAME}"'"
    }
  }'
