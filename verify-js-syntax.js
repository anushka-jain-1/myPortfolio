// Simple syntax verification for image-error-handler.js
// This script checks if the JavaScript file has valid syntax

const fs = require('fs');

try {
  // Read the file
  const code = fs.readFileSync('js/image-error-handler.js', 'utf8');
  
  // Try to parse it (this will throw if there's a syntax error)
  new Function(code);
  
  console.log('✓ JavaScript syntax is valid');
  console.log('✓ No syntax errors found');
  process.exit(0);
} catch (error) {
  console.error('✗ Syntax error found:');
  console.error(error.message);
  process.exit(1);
}
