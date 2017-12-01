'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var WidgetContextSchema = new Schema({
  widget: {
    type: String
  },
  value: {
    type: String
  },
  position: {
    type: String
  },
  created_date: {
    type: Date,
    default: Date.now
  }
});
module.exports = mongoose.model('WidgetContexts', WidgetContextSchema);
