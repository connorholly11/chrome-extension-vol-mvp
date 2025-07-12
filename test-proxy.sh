#!/bin/bash

echo "Testing proxy server connection..."
echo ""

# First test if proxy is running
echo "1. Testing proxy server at localhost:3001..."
curl -I http://localhost:3001 2>/dev/null | head -n 1

echo ""
echo "2. Testing auth endpoint through proxy..."
curl -X POST http://localhost:3001/api/v2/Propsite/User/GenerateTradingToken \
  -H "Content-Type: application/json" \
  -d '{
    "login": "augulis.david@gmail.com",
    "password": "YV9kqf8K",
    "version": 3,
    "platform": 0
  }' \
  -w "\nHTTP Status: %{http_code}\n" \
  2>/dev/null | head -20