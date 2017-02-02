var http = require('http'),
    Promise = require('bluebird'),
    chalk = require('chalk'),
    server = require('./server')
    Core = require('./core')
;

function Main(settings){
  console.log(chalk.green('Iniciado main...'));
  Core.init();
  Core.getUrls();
  server.init();
  return Promise.resolve(server);
}

module.exports = function (settings){
  return Main(settings).then(function (server){
    return Promise.resolve(server);
  }).catch(function (e){
    console.log(chalk.red('error'));
  });
};
