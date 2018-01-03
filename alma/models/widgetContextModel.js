'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var WidgetContextSchema = new Schema({
  widget: {
    type: String
  },
  widget_value: {
    type: String
  },
  widget_position: {
    type: String
  },
  created_date: {
    type: Date,
    default: Date.now
  }
});
module.exports = mongoose.model('WidgetContexts', WidgetContextSchema);
