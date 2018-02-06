'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Item = require('../models/itemModel');

var QuestionSchema = new Schema({
  order: Number,  //ordem das questoes
  image: String,  //url de uma imagem
  item: [Items],
  supervised_reading: {
    identifier: String, //ex: R1, R1+R2, R2, CC1, AC1, C1...
    expected_value: Number
  }
});
module.exports = mongoose.model('Questions', QuestionSchema);
