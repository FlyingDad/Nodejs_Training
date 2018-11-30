const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
	const url = req.url;
	const method = req.method;
	// console.log(url, method)


	if (url === '/') {
		res.write('<html>');
		res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Submit</button></form>');
		res.write('</body>');
		return res.end();
	}
	if(url === '/message' && method === 'POST') {
		const body = [];
		req.on('data', (chunk) => {
			// console.log(chunk);
			body.push(chunk);
		});
		return req.on('end', () => {
			const parsedBody = Buffer.concat(body).toString();
			// console.log(parsedBody);
			const message = parsedBody.split('=')[1];
			fs.writeFile('message.txt', message, (err) => {
				res.statusCode = 302;
				res.setHeader('Location', '/')
				return res.end();
			});	
		});
	}

	res.setHeader('Content-Type', 'text/html');
	res.write('<html>');
	res.write('<body>');
	res.write('<p>Hello</p>');
	res.write('</body>');
	res.end();
});

server.listen(3000);
