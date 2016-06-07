var fs = require('fs');

var dir =  process.argv[2];
var string = process.argv[3];
fs.readdir(dir, function(err, data) {
  if (err) return;
  var da;
  if(string.length > 0) {
    for(d in data) {
      da = data[d];
      if(da.indexOf("."+string) > -1) {
        if(da.length - string.length == da.indexOf(string)) {
          console.log(data[d]);
        }
      }
    }
  }
});

/*

var fs = require('fs')
var path = require('path')

fs.readdir(process.argv[2], function (err, list) {
  list.forEach(function (file) {
    if (path.extname(file) === '.' + process.argv[3])
      console.log(file)
  })
})

*/
