'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LaboratorySchema = new Schema({
  name: {
    type: String,
    required: 'Enter the name of the laboratory'
  },
  local: {
    type: String
  },
  local_server: {
    type: String
  },
  widget: { // { ou {[
    name: {
      type: String
    },
    rule: {
      type: String
    },
    status: {
      type: String,
      enum: ['on', 'off']
    }
  },
  created_date: {
    type: Date,
    default: Date.now
  }
});
module.exports = mongoose.model('Laboratories', LaboratorySchema);
