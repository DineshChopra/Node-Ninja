var fs = require('fs');
// fs.unlink('writeMe.txt');

/**
 * Create a directory synchronuslly
 */
var dirName = 'async-dir';
function createDirectory() {
    fs.mkdir(dirName, function () {
        fs.readFile('readme.txt', 'utf8', function (err, data) {
            if (err) throw err;
            fs.writeFile(dirName + '/writeme.txt', data);
        })
    });
}
// createDirectory();

/**
 * Removing a directory synchronuslly
 */
function removeDirectory(){
    fs.unlink(dirName + '/writeme.txt', function(){
        fs.rmdirSync(dirName);
    });
}
// removeDirectory();