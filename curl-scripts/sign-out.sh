#!/bin/bash

curl "https://foodtrient.herokuapp.com/sign-out" \
--include \
--header "Authorization: Token token=${TOKEN}"
--request DELETE \

echo
