var fs = require('fs');
var ipc = require('ipc');


// Expose the Config module
module.exports = Config;

function Config(args) {
  if (!(this instanceof Config)) return new Config(args);
  this.opts = {
    userName: args.userName || ''
  };
  console.log(this.opts.userName);

}

// This function runs synchronously
// because config options need to be set before other things happen
Config.load = function() {
  // Note ipc runs synchronously in this setup
  var path = ipc.sendSync('getPath', 'userData');
  path = path + '\\config.json';

  var data = fs.readFileSync(path, 'utf-8');
  return data;
};

// This function runs synchronously
// because config options need to be set before other things happen
Config.loadCreate = function() {
  // Note ipc runs synchronously in this setup
  var path = ipc.sendSync('getPath', 'userData');
  path = path + '\\config.json';
  try {
    var data = fs.readFileSync(path, 'utf-8');
    console.log("Config file read");
    return data;
  } catch (e) {
    console.log('Config file not found');
    console.log('Attempting create stub config file');
    var create = createFile(path);
    if(create === 'error') {
      console.log('Stub config file NOT created');
      return 'error';
    } else {
      console.log('Stub config file created');
      return create;
    }

  }


};

Config.update = function(args) {

};

// Creates config file synchronously
function createFile(path, args) {
  if(args === null) {
    console.log('Create stub args');
    args = {
      username: '',
      someSetting: '',
      someOtherSetting: ''
    };
  }
  try {
    fs.writeFileSync(path, JSON.stringify(args, null, 2));
  } catch(e) {
    console.log('Error: File not created');
    console.log(e);
    return 'error';
  }
  console.log('config file created');
  return 'created';
}
