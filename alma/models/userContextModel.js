'use strict';
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let UserContextSchema = new Schema({
  user_id:String,
  user_position: String, ////ex: Lab1 B1
  logged: Boolean,
  created_date: {
    type: Date,
    default: Date.now
  }
});
module.exports = mongoose.model('UserContexts', UserContextSchema);
