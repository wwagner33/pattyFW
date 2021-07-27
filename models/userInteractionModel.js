'use strict';
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let UserInteractionSchema = new Schema({
  user_context_id: String,
  widget_context_id: String,

  activity_id: String,
  activity_status: {
    type: String,
    enum: ['ongoing', 'finished']
  },
  //usually, send sensored value and digited value by user
  supervised_reading: String, //example: R1, R1+R2, R2, CC1, AC1, C1...
  user_entered_value: String,

  created_date: {
    type: Date,
    default: Date.now
  }
});
module.exports = mongoose.model('UserInteractions', UserInteractionSchema);
