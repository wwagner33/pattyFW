'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/*var ItemSchema = new Schema({
  position: Number, //quem aparece em que ordem
  quantity: Number, //quantos
  value: Number,    //ex: 1 (pra 1kohm)
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

var QuestionSchema = new Schema({
  order: Number,  //ordem das questoes
  image: String,  //url de uma imagem
  item: [ItemSchema],
  supervised_reading: {
    identifier: String, //ex: R1, R1+R2, R2, CC1, AC1, C1...
    expected_value: Number
  }
});*/

var ActivitySchema = new Schema({
  name: {
    type: String,
    required: 'Enter the name of the activity'
  },
  description: {
    type: String
  },
  laboratory_id: {
    type: String
  },
  questions_quantity: Number,
  question: mongoose.Types.Array<Questions>,
  created_date: {
    type: Date,
    default: Date.now
  }
});
module.exports = mongoose.model('Activities', ActivitySchema);
/*
Activities.find(function(err, activity) {
  if (err) return console.error(err);
  res.json(activity);
});
*/
