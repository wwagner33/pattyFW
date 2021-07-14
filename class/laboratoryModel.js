'use strict';
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let LaboratorySchema = new Schema({
  name: {
    type: String,
    required: 'Enter the name of the laboratory'
  },
  subject: {
    type: String,
    enum: ['Fisica', 'Quimica', 'Outro']
  },
  local: { //configurado no equipamento do lab
    type: String
  },
  local_server: {
    type: String //ip
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
