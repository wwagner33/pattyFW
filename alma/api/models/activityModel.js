'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

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
  created_date: {
    type: Date,
    default: Date.now
  }
});
module.exports = mongoose.model('Activities', ActivitySchema);
/*,status: {
  type: [{
    type: String,
    enum: ['pending', 'ongoing', 'completed']
  }],
  default: ['pending']
}*/
