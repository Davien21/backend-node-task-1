const http = require('http');
const server = http.createServer((req,res) => {
	res.writeHead(200, {'Content-Type': 'text/html'});
	if (req.url === '/' && req.method === 'GET') {
		res.end('Hello World, Welcome to WeJapa Internships');
	}else if (req.url === '/' && req.method === 'POST') {
		let data = "";
	    req.on("data", chunk => {
	      data += chunk.toString();
	    })
	    req.on("end", () => {
	    	name = data.split('=')[1];
			res.end(`Hello ${name}, Welcome to WeJapa Internships`);
	    })
	}else {
		res.end('Invalid Request');
	}
});

server.listen(8080);
