#!/bin/bash

curl --include --request PATCH "http://localhost:4741/fridges/${ID}" \
  --header "Content-Type: application/json" \
  --data '{
    "fridge": {
      "name": "'"${NAME}"'"
    }
  }'
