const path = require('path');

console.log('Current file info: \n');
console.log('filename: ', __filename);
console.log('Directory: ', __dirname);

console.log('\n' + '-'.repeat(50) + '\n');

const filePath = '/akash/documents/nextLevel.pdf';

console.log('analyzing path: ', filePath, '\n');

console.log('Directory: ', path.dirname(filePath));
console.log('Base name: ', path.basename(filePath));
console.log('file extension: ', path.extname(filePath));
console.log('file name: ', path.basename(filePath, path.extname(filePath)));

console.log('\n' + '-'.repeat(50) + '\n');

const parsed = path.parse(filePath);
console.log('parsed path object: ',parsed);