'use strict';
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let WidgetContextSchema = new Schema({
  sensored_type: String, //ex: 'Resistor', 'CC source', 'AC source', 'Capacitor'
  sensored_unit: String, //ex: 'Kohm', 'microFaraday', 'Volts', 'Hertz'
  sensored_value: String, //ex: 1.5
  widget_position: String, //ex: Lab1 B1
  created_date: {
    type: Date,
    default: Date.now
  }
});
module.exports = mongoose.model('WidgetContexts', WidgetContextSchema);
