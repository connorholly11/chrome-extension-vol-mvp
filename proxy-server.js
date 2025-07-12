// Simple proxy server to bypass CORS for local development
import http from 'http';
import https from 'https';
import { URL } from 'url';
import { getEnv } from './config.js';

const PORT = 3001;
const CURRENT = getEnv('FUTURES', 'prod');
const TARGET_HOST = new URL(CURRENT.REST).hostname;
const API_KEY = CURRENT.API_KEY;

const server = http.createServer((req, res) => {
  console.log('\n=== INCOMING REQUEST ===');
  console.log('Timestamp:', new Date().toISOString());
  console.log('Method:', req.method);
  console.log('URL:', req.url);
  console.log('Headers:', req.headers);
  
  // Enable CORS for the extension
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  /**
   * Allow the headers the browser asked for, plus anything custom we always need.
   * This solves the pre-flight failure caused by the required `x-api-key`.
   */
  const requested = req.headers['access-control-request-headers'];
  const always = 'Content-Type, PltfKey';
  res.setHeader(
    'Access-Control-Allow-Headers',
    requested ? `${always}, ${requested}` : always
  );

  // Handle preflight
  if (req.method === 'OPTIONS') {
    console.log('Handling CORS preflight request');
    res.writeHead(200);
    res.end();
    return;
  }

  // Handle any POST or GET request and forward it
  if (req.method === 'POST' || req.method === 'GET') {
    let body = '';
    
    req.on('data', chunk => {
      body += chunk.toString();
    });
    
    req.on('end', () => {
      console.log('\n=== PROXYING REQUEST ===');
      console.log('Request body:', body);
      console.log('Target host:', TARGET_HOST);
      console.log('Target path:', req.url);
      console.log('API Key:', API_KEY.substring(0, 20) + '...');
      
      // Forward request to actual API
      const options = {
        hostname: TARGET_HOST,
        path: req.url,
        method: req.method,
        headers: {
          'PltfKey': API_KEY,
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(body)
        }
      };
      
      const proxyReq = https.request(options, (proxyRes) => {
        console.log('\n=== RESPONSE FROM VOLUMETRICA ===');
        console.log('Status:', proxyRes.statusCode);
        console.log('Status message:', proxyRes.statusMessage);
        console.log('Headers:', proxyRes.headers);
        
        // Capture response body for logging
        let responseBody = '';
        proxyRes.on('data', chunk => {
          responseBody += chunk.toString();
        });
        
        proxyRes.on('end', () => {
          console.log('Response body:', responseBody);
          console.log('==============================\n');
        });
        
        // Forward status code
        res.writeHead(proxyRes.statusCode, {
          'Content-Type': proxyRes.headers['content-type'] || 'application/json'
        });
        
        // Pipe the response
        proxyRes.pipe(res);
      });
      
      proxyReq.on('error', (error) => {
        console.error('\n=== PROXY ERROR ===');
        console.error('Error:', error.message);
        console.error('Code:', error.code);
        console.error('Stack:', error.stack);
        console.error('==============================\n');
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Proxy error', details: error.message }));
      });
      
      // Send the request body
      proxyReq.write(body);
      proxyReq.end();
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Not found' }));
  }
});

server.listen(PORT, () => {
  console.log('\n=== PROXY SERVER STARTED ===');
  console.log('Port:', PORT);
  console.log('API Key:', API_KEY.substring(0, 20) + '...');
  console.log('Target host:', TARGET_HOST);
  console.log('Environment: FUTURES / PRODUCTION');
  console.log('\nUse http://localhost:' + PORT + '/api/v2/auth/token in your extension');
  console.log('==============================\n');
});