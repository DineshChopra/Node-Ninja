var fs = require('fs');

/**
 * Asynchronuslly reading a file.
 * 
 * utf8 converts binary data into human readable format.
 */
fs.readFile('readme.txt', 'utf8', function(err, data){
    if(err){
        console.log('Error reading a file');
        console.dir(err);
        return;
    }
    fs.writeFileSync('writeMe-async.txt', data);
});