var http = require('http'),
    Promise = require('bluebird'),
    Create,
    Server;

// var server = http.createServer(function( req, res){
//     res.writeHead(200,{'Content-Type': 'text/html'});
//     res.end('Hola mundo');
// });

Server = function(){
  this.Server = http.createServer;
}

Server.prototype.init = function (){
  this.Server(function(req, res){
    res.writeHead(200,{'Content-Type': 'text/html'});
    res.end('Hola mundo');
  }).listen(8000);
}


module.exports = new Server();
