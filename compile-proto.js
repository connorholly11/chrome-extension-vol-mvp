#!/usr/bin/env node

// Script to compile .proto files to JavaScript modules
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

async function compileProtos() {
  try {
    console.log('Compiling .proto files...');
    
    // Compile to static module
    await execAsync('npx pbjs -t static-module -w es6 -o proto.js PropTradingProtocol.proto PropTradingCommonProtocol.proto');
    console.log('Generated proto.js');
    
    // Generate TypeScript definitions (optional)
    try {
      await execAsync('npx pbts -o proto.d.ts proto.js');
      console.log('Generated proto.d.ts');
    } catch (e) {
      console.log('Skipping TypeScript definitions');
    }
    
    console.log('Proto compilation complete!');
  } catch (error) {
    console.error('Proto compilation failed:', error);
    process.exit(1);
  }
}

compileProtos();