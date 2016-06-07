var fs = require('fs');

var file =  process.argv[2];
var f = fs.readFileSync(file, { 'encoding' : 'utf8' });
var lines = f.split('\n');

console.log(lines.length-1);
