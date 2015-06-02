var fs = require('fs');
var logger = require("./utils/logger.js");

// Expose the database module
module.exports = Database;

function Database() {
  if (!(this instanceof Database)) return new Database();
}
