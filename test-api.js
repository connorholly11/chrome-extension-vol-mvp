// Quick test to verify API endpoints
const API_KEY = 'rUVFBQaSQnY6QmU2HzXPeOVqfdrpiupPfmjdZSwX9eitqewTNFRQAK6LgW96RWz4';

async function testEndpoints() {
  console.log('Testing Volumetrica API endpoints...\n');
  
  const endpoints = [
    'https://api.volumetricafx.com/api/v2/user/generateTradingToken',
    'https://staging-api.volumetricafx.com/api/v2/user/generateTradingToken',
    'https://api.volumetricafx.com/api/v1/user/generateTradingToken',
    'https://staging-api.volumetricafx.com/api/v1/user/generateTradingToken',
    'https://api.volumetricafx.com/api/v2/generateTradingToken',
    'https://staging-api.volumetricafx.com/api/v2/generateTradingToken',
  ];
  
  for (const url of endpoints) {
    try {
      console.log(`Testing: ${url}`);
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'x-api-key': API_KEY,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          login: 'test',
          password: 'test',
          withDetails: false,
          version: 3,
          environment: url.includes('staging') ? 1 : 0,
          platform: 10000,
          connectOnlyTrading: true
        })
      });
      
      console.log(`  Status: ${response.status}`);
      console.log(`  Content-Type: ${response.headers.get('content-type')}`);
      
      if (response.headers.get('content-type')?.includes('json')) {
        const data = await response.json();
        console.log('  Response:', JSON.stringify(data).substring(0, 100));
      } else {
        console.log('  Response: HTML (not JSON)');
      }
    } catch (error) {
      console.log(`  Error: ${error.message}`);
    }
    console.log('');
  }
}

// Note: This won't work in the browser due to CORS
console.log('Copy and run this in Node.js or use curl commands instead');
console.log('\nCURL command to test:');
console.log(`curl -X POST https://staging-api.volumetricafx.com/api/v2/user/generateTradingToken \\
  -H "x-api-key: ${API_KEY}" \\
  -H "Content-Type: application/json" \\
  -d '{
    "login": "your-username",
    "password": "your-password",
    "withDetails": false,
    "version": 3,
    "environment": 1,
    "platform": 10000,
    "connectOnlyTrading": true
  }'`);