var fs = require('fs');
var ipc = require('ipc');
var logger = require("./utils/logger.js");


// Expose the Config module
module.exports = Config;

function Config() {
  if (!(this instanceof Config)) return new Config();
}

// This function runs synchronously
// because config options need to be set before other things happen
Config.load = function() {
  // Note ipc runs synchronously in this setup
  var path = ipc.sendSync('getPath', 'userData');
  path = path + '\\config.json';
  try {
    var data = fs.readFileSync(path, 'utf-8');
    logger.log('info', 'Config file read');
    return data;
  } catch (e) {
    logger.log('info', 'Config file not found');
    logger.log('info', 'Attempting create stub config file');
    var create = createFile(path);
    if(create === 'error') {
      logger.log('error', 'Stub config file NOT created');
      return 'error';
    } else {
      logger.log('info', 'Stub config file created');
      return create;
    }

  }

};

// This function runs synchronously
// because config options need to be set before other things happen
Config.loadCreate = function() {
  // Note ipc runs synchronously in this setup
  var path = ipc.sendSync('getPath', 'userData');
  path = path + '\\config.json';
  try {
    var data = fs.readFileSync(path, 'utf-8');
    // logger.log('info', "Config file read");
    logger.log('info',  'Config file read');
    return data;
  } catch (e) {
    logger.log('info', 'Config file not found');
    logger.log('info', 'Attempting create stub config file');
    var create = createFile(path);
    if(create === 'error') {
      logger.log('error', 'Stub config file NOT created');
      return 'error';
    } else {
      logger.log('info', 'Stub config file created');
      return create;
    }

  }

};

Config.update = function(args) {

};

// Creates config file synchronously
function createFile(path, args) {
  if(args === null) {
    logger.log('info', 'Creating stub args');
    args = {
      username: '',
      someSetting: '',
      someOtherSetting: ''
    };
  }
  try {
    fs.writeFileSync(path, JSON.stringify(args, null, 2));
  } catch(e) {
    logger.log('Error', 'Config file not created');
    logger.log('Error', e);
    return 'error';
  }
  logger.log('info', 'config file created');
  return 'created';
}
