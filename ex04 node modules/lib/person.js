let EventEmitter = require('events').EventEmitter;
let util = require('util')

let Person = function(name) {
	this.name =name;
}

util.inherits(Person, EventEmitter)

module.exports = Person;