global.urls = urls || {};

var url = function (url, view, name){
  global.urls[name] = { url: url, view: view};
};

module.exports = url;
