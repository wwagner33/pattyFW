'use strict';
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let WidgetContextSchema = new Schema({
  sensored_type: String, //example: 'Resistor', 'CC source', 'AC source', 'Capacitor'
  sensored_unit: String, //example: 'Kohm', 'microFaraday', 'Volts', 'Hertz'
  sensored_value: String, //example: 1.5
  widget_position: String, //example: Lab1 B1
  created_date: {
    type: Date,
    default: Date.now
  }
});
module.exports = mongoose.model('WidgetContexts', WidgetContextSchema);
