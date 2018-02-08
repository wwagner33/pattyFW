'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserContextSchema = new Schema({
  user_id:String,
  user_position: String, ////ex: Lab1 B1
  logged: Boolean,
  created_date: {
    type: Date,
    default: Date.now
  }
});
module.exports = mongoose.model('UserContexts', UserContextSchema);
