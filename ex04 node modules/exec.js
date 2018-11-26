let exec = require('child_process').exec;

// exec("open http://google.com");
// exec("open .");
exec('git version', function(err, stdout){
	if(err){
		throw err;
	}
	console.log("Done listening:\n", stdout)
})