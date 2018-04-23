'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ItemSchema = new Schema({
  position: Number, //quem aparece em que ordem
  quantity: Number, //quantos itens
  value: [[Number]], // array de numeros - ex: [5,10] (pra 1kohm)
  unit:{
    type: String,
    enum: ['Kohm', 'microFaraday', 'Volts', 'Hertz']
  },
  disposition: {    //estao em serie, em paralelo ou eh item unico
    type: String,
    enum: ['unique', 'serial', 'parallel']
  },
  type: {           //tipo de elemento
    type: String,
    enum: ['[R]esistor', '[CC] source', '[AC] source', '[C]apacitor']
  }
});

var ExpectedSchema = new Schema({
  element: String, //o que vai ser lido - ex: R1, R1+R2, R2, CC1, AC1, C1...
  expected_value: Number, //quanto
  unit: String
});
/*
var QuestionSchema = new Schema({
  order: Number,  //ordem das questoes
  image: String,  //url de uma imagem
  item: [ItemSchema],
  supervised_reading: String, //ex: R1, R1+R2, R2, CC1, AC1, C1...
  expected_value: Number
});*/

var ActivitySchema = new Schema({
  name: {
    type: String,
    required: 'Enter the name of the activity'
  },
  description: String,
  laboratory_id: String,
  questions_quantity: Number,
  question:
    {
      order: Number,  //ordem das questoes
      image: String,  //url de uma imagem
      item: [ItemSchema],
      supervised_reading: [ExpectedSchema]
    },
  created_date: {
    type: Date,
    default: Date.now
  }
});
module.exports = mongoose.model('Activities', ActivitySchema);
