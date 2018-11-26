var Person = require('./lib/person')

let ben = new Person();
ben.name = 'Ben'
console.log(ben)
ben.on('speak', function(said) {
	console.log(`${this.name}: ${said}`)
})

ben.emit('speak', 'How, indian')

// let emmiter = new events.EventEmitter();

// emmiter.on('customEvent', (msg, status) => {
// 	console.log(`${status}: ${msg}`)
// });

// emmiter.emit('customEvent', 'Hello', 200);