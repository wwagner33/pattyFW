'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserInteractionSchema = new Schema({
  text: {
    type: String
  },
  user_id: {
    type: String
  },
  activity_id: {
    type: String
  },
  status: {
    type: String,
    enum: ['nao iniciada', 'em andamento', 'terminada']
  },
  created_date: {
    type: Date,
    default: Date.now
  }
});
module.exports = mongoose.model('UserInteractions', UserInteractionSchema);
