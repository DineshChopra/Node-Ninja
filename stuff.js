var counter = function(arr){
    return `There are ${arr.length} elements in this array`;
}
var adders = function(a, b){
    return `Sum of ${a} and ${b} is ${a+b}`;
}
var pi = 3.145
module.exports.counter = counter;
module.exports.adders = adders;
module.exports.pi = pi;