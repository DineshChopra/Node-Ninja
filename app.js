console.log('Hello world');
console.log(__dirname);
console.log(__filename);
var counter = require('./count');
var stuff = require('./stuff');
console.log(counter([1,2,3]));
console.log(stuff.adders(10, 20));
console.log(stuff.counter([10, 20]));
console.log(stuff.pi);