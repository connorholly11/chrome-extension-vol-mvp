// ES Module wrapper for proto-bundle.js
// This converts the UMD module to a proper ES module

// Import protobufjs minimal build
import protobuf from 'protobufjs/minimal.js';

// Create a module-scoped variable to hold the proto definitions
let protoModule = null;

// Load the proto-bundle as a script and capture its exports
const loadProtoBundle = () => {
  if (protoModule) return protoModule;
  
  // Create a fake module environment
  const fakeModule = { exports: {} };
  const fakeRequire = (name) => {
    if (name === 'protobufjs/minimal') return protobuf;
    throw new Error(`Unknown module: ${name}`);
  };
  
  // Define the proto-bundle content as a function
  const protoBundleFactory = function($protobuf) {
    "use strict";

    // Common aliases
    var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
    
    // Exported root namespace
    var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});
    
    // We'll need to import the actual proto definitions here
    // For now, return the root with lookup methods
    return $root;
  };
  
  // Execute the factory
  protoModule = protoBundleFactory(protobuf);
  
  return protoModule;
};

// Export the loaded module
export default loadProtoBundle();

// Also export a function to get specific message types
export function lookupType(typeName) {
  const root = loadProtoBundle();
  return root.lookupType ? root.lookupType(typeName) : root[typeName];
}