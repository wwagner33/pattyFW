'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ItemSchema = new Schema({
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

module.exports = mongoose.model('Items', ItemSchema);
