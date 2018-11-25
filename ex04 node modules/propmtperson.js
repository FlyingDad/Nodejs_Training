var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);

var realPerson = {
	name: '',
	sayings: []
}

rl.question("Name? ", function(ans) {
	realPerson.name = ans;
	rl.setPrompt(`What would ${realPerson.name} say? `)
	rl.prompt();
	rl.on('line', function(saying) {
		realPerson.sayings.push(saying);
		if(saying.toLowerCase().trim() == 'exit'){
			rl.close();
		} else {
			rl.setPrompt(`What else would ${realPerson.name} say? ('exit' to leave)`);
			rl.prompt();
		}
	});

});

rl.on('close', () => {
	console.log("%s is a real person thay says %j", realPerson.name, realPerson.sayings);
	process.exit();
})