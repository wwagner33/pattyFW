'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserContextSchema = new Schema({
  user_id: {
    type: String
  },
  position: {
    type: String
  },
  logged: {
    type: Boolean
  },
  created_date: {
    type: Date,
    default: Date.now
  }
});
module.exports = mongoose.model('UserContexts', UserContextSchema);
