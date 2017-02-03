var http = require('http'),
    Promise = require('bluebird');


var _Server = function(req, res){
  res.writeHead(200,{'Content-Type': 'text/html'});
  res.end('Hola mundo');
};

var Server = function(){
  this.server = http.createServer;
  return this;
}

Server.prototype.init = function (){
  console.log(chalk.gray('Starting server'));
  // this.server.listen(8000);
}


module.exports = Server;
