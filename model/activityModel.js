'use strict';
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let ItemSchema = new Schema({
  position: Number, //display order
  quantity: Number, //how many items
  value: [Number], // array of numbers: [5,10] (to 1kohm ???)
  unit:{
    type: String,
    enum: ['Kohm', 'microFaraday', 'Volts', 'Hertz']
  },
  disposition: {    //in series, in parallel or single item
    type: String,
    enum: ['single', 'serial', 'parallel']
  },
  type: {           //type of element
    type: String,
    enum: ['[R]esistor', '[CC] source', '[AC] source', '[C]apacitor']
  }
});

let ExpectedSchema = new Schema({
  element: String, //item to be read: R1, R1+R2, R2, CC1, AC1, C1...
  expected_value: Number, 
  unit: String
});

let ActivitySchema = new Schema({
  name: {
    type: String,
    required: 'Enter the name of the activity'
  },
  description: String,
  laboratory_id: String,
  questions_quantity: Number,
  question:
    {
      order: Number,  //order of questions
      image: String,  //image url
      item: [ItemSchema],
      supervised_reading: [ExpectedSchema]
    },
  created_date: {
    type: Date,
    default: Date.now
  }
});
module.exports = mongoose.model('Activities', ActivitySchema);
