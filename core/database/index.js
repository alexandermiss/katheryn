var mongoose  = require('mongoose');

module.exports = function (settings){
  return mongoose.connect(settings.DATABASE.URL);
}
