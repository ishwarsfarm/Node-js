var http = require('http');

var server = http.createServer(function(req,res){
	res.end('Hello , channa');
});

server.listen(3000);