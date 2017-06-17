var fs = require('fs');

// Synchronully reading a file. control can not move further before reading given file.
var readMe = fs.readFileSync('readme.txt', 'utf8'); // utf8 converts binary data into human readable format.
console.log(readMe);
fs.writeFileSync('writeMe.txt', readMe);