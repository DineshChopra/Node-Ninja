var fs = require('fs');
// fs.unlink('writeMe.txt');

/**
 * Create a directory synchronuslly
 */
// fs.mkdirSync('stuff');

/**
 * Removing a directory synchronuslly
 */
fs.rmdirSync('stuff');