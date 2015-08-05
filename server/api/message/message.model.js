'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var MessageSchema = new Schema({
  username: String,
  type: String,
  scope: String,
  timestamp: String,
  message: String
});

module.exports = mongoose.model('Message', MessageSchema);
