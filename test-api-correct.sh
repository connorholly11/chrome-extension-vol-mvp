#!/bin/bash

echo "Testing Volumetrica API with correct endpoint path..."
echo ""

# Test the correct endpoint
curl -X POST https://d-traderslaunch.volumetricatrading.com/api/v2/Propsite/User/GenerateTradingToken \
  -H "x-api-key: URAp7b9wbmUCr0J7IieMaUoIe60ixtgchejOWjFJeQi7jrAlSfQNuyaDebgloot5" \
  -H "Content-Type: application/json" \
  -d '{
    "login": "augulis.david@gmail.com",
    "password": "YV9kqf8K",
    "version": 3,
    "platform": 0
  }' \
  -v