var _           = require('lodash'),
    path        = require('path');


var Apps = function (settings){
  this._settings = settings;
  this._db = require('../database')(settings);
  return this;
}

Apps.prototype.readApps = function (){
  var settings = this._settings, mongoose = this._db, apps = {};

  _.each(settings.INSTALLED_APPS, function(c){
    var Model = require(path.join(settings.BASE_DIR, c, 'models.js'));

    _.each(Model.Models, function (model, name){
      var modelSchema = mongoose.Schema(model.attributes, {collection: name});
      var model = mongoose.model(name, modelSchema);
      global[name] = model;
      apps[c] = { app_name: c, model: model, model_name: name };
    });

  });

  // this.apps = apps;
  return apps;
}


module.exports = function(settings){
  return new Apps(settings);
}
