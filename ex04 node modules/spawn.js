let spawn = require('child_process').spawn;

let cp = spawn("node", ['alwaysTalking']);

cp.stdout.on('data', function(data){
	console.log('STDOUT: ' + data);
})

cp.on('close', function(){
	console.log('ended');
	process.exit();
})

setTimeout(function() {
	cp.stdin.write('stop');
}, 4000);