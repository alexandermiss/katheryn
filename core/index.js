var path          = require('path'),
    _             = require('lodash'),
    Promise       = require('bluebird'),
    chalk         = require('chalk'),
    Server        = require('./server'),
    apps          = require('./apps'),
    KatherynCore
;

var KatherynApp = function (settings){
  console.log(chalk.green('Starting katheryn:core...'));

  this._settings  = settings;
  this._server    = new Server();
  this.init();
  this.testing();
  return Promise.resolve();
}

KatherynApp.prototype.init = function (){
    var settings = this._settings;

    this._apps = apps(settings).readApps();
}

KatherynApp.prototype.testing = function (){
  console.log(this._apps.main.User);
  console.log(User);
}

module.exports = KatherynApp;
