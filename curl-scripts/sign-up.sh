#!/bin/bash

curl "https://foodtrient.herokuapp.com/sign-up[?over=]" \
--include \
--request POST \
--header "Content-Type: application/json" \
--data '{
  "game": {
    "email": "'"${EMAIL}"'",
    "password": "'"${PASSWORD}"'",
    "password_confirmation": "'"${PASSWORD}"'"
  }
}'

echo
