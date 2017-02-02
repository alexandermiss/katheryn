var fs      = require('fs'),
    path    = require('path'),
    _       = require('lodash'),
    // mongoose = require('./database'),

    Core
;


Core = {
  init: function (settings){
    console.log('core:init');
    // var modelFolder = fs.readdirSync(settings.modelPath);
    //
    // _.each(settings.INSTALLED_APPS, function(c){
    //   var Model = require(path.join(config.BASE_DIR, 'models.js'));
    //
    //   _.each(Model.Models, function (model, name){
    //     var modelSchema = mongoose.Schema(model.attributes, {collection: name});
    //     global[m] = mongoose.model(m, modelSchema);
    //   });
    //
    // });
  },

  getUrl : function (){
    // var urls = require('')
    // console.log(__dirname);

  }
};

module.exports = Core;
