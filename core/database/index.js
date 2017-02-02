var mongoose  = require('mongoose'),
    config    = require('../../config');

mongoose.connect(config.database.url);

module.exports = mongoose;
