var events = require('events');
// var myEmitter = new events.EventEmitter();

// myEmitter.on('someEvent', function(msg){
//     console.log(msg);
// })

// myEmitter.emit('someEvent', 'The event is emitted');

var util = require('util');
var Person = function(name){
    this.name = name;
    var age = 10;
}

util.inherits(Person, events.EventEmitter);

var ram = new Person('Ram');
var sham = new Person('Sham');
var gita = new Person('Gita');

var people = [ram, sham, gita];
people.forEach(function(person){
    person.on('speak', function(msg){
        console.log(`${person.name} said : ${msg}`);
    })
})

ram.emit('speak', 'hey dudes');
sham.emit('speak', 'How aree you?');