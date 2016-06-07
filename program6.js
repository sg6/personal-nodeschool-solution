var _mod = require('./program6-module');

_mod(process.argv[2], process.argv[3], function(err, data) {
  for(d in data) {
    console.log(data[d]);
  }
});
