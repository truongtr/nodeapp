// var http  = require('http');

// http.createServer(function(req,res){
// 	res.writeHead (200,{'content-type':'text/plain'});
// 	res.end('hello!');
// }).listen(1338,'127.0.0.1');

// console.log('webserver has started');

var http  = require('http');
var fs  = require('fs');


http.createServer(function(req,res){
	fs.readFile('index.html', function(err,data){
		res.writeHead (200,{'content-type':'text/html'});
		res.end(data);
	});
	
}).listen(1338,'127.0.0.1');

console.log('webserver has started');
