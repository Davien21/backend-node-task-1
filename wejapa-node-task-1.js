const http = require('http');
const server = http.createServer((req,res) => {
	res.writeHead(200, {'Content-Type': 'text/html'});
	if (req.url === '/') {
		return 'Hello World, Welcome to WeJapa Internships';
		res.end();
	}else if (req.url === '/' && req.method === 'POST') {
		let data = "";
	    req.on("data", chunk => {
	      data += chunk.toString();
	    })
	    req.on("end", () => {
	    	name = data.split('=')[1];
			return `Hello ${name}, Welcome to WeJapa Internships`;
			res.end();
	    })
	}else {
		return 'Invalid Request';
		res.end();
	}
});

server.listen(8080);
