#!/bin/bash

curl --include --request GET "http://localhost:4741/fridges/${ID}" \
--header "Authorization: Token token=${TOKEN}"
