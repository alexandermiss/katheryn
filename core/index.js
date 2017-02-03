var path = require('path'),
    _ = require('lodash'),
    Promise = require('bluebird'),
    chalk = require('chalk'),
    Server = require('./server'),
    KatherynCore
;


var KatherynApp = function (settings){
  console.log(chalk.green('Starting katheryn:core...'));
  this._settings  = settings;
  this._server    = new Server();
  return Promise.resolve(this._server);
}

KatherynApp.prototype.startServer = function (){
    var settings = this._settings;
    console.log('settings.BASE_DIR', settings.BASE_DIR);
    // var modelFolder = fs.readdirSync(settings.modelPath);
    //
    // _.each(settings.INSTALLED_APPS, function(c){
    //   var Model = require(path.join(settings.BASE_DIR, 'models.js'));
    //
    //   _.each(Model.Models, function (model, name){
    //     var modelSchema = mongoose.Schema(model.attributes, {collection: name});
    //     global[m] = mongoose.model(m, modelSchema);
    //   });

    // });
}

KatherynApp.prototype.startServer = function (){

}

// module.exports = function (settings){
//   return KatherynApp(settings).then(function (server){
//     return Promise.resolve(server);
//   }).catch(function (e){
//     console.log(chalk.red('error'));
//   });
// };
module.exports = KatherynApp;
