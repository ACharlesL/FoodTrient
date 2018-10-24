#!/bin/bash

curl --include --request PATCH "http://localhost:4741/fridges/${ID}" \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}"
  --data '{
    "fridge": {
      "name": "'"${NAME}"'"
    }
  }'
