let http = require('http');

let server = http.createServer((req, res) => {
	const path = req.url;
	const method = req.method;

	if(path === '/'){
		console.log('home');
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write('<html><body>');
		res.write('<div><h1>Hello</h1></div>');
		res.write('<form action="/create-user" method="POST"><input name="create-user" type="text"></input>');
		res.write('<button>Create User</button></form>');
		res.write('</body></ul>');
		res.end();
	}
	if(path === '/users'){
		console.log('users');
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write('<html><body>');
		res.write('<ul>');
		res.write('<li>Mary</li><li>Jane</li><li>Moonlight</li>');
		res.write('</ul>');
		res.write('</body></ul>');
		res.end();
	}
	if(path === '/create-user' && method === 'POST'){
		const newUser = [];

		req.on('data', chunk => {
			newUser.push(chunk);
		});
		return req.on('end', () => {
			const parsedUserName = Buffer.concat(newUser).toString();
			console.log(parsedUserName.split('=')[1]);
		})
	}
});

server.listen(80);