var fs = require('fs')
var path = require('path')

module.exports = function(dir, fileextension, cb) {
  var _files = [];
  fs.readdir(dir, function (err, list) {
    if(err) return cb(err);
    list.forEach(function (file) {
      if (path.extname(file) === '.' + fileextension)
        _files.push(file);
    });
    return cb(null,_files);
  });
};
