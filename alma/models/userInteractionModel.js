'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserInteractionSchema = new Schema({
  user_context_id: {
    type: String
  },
  activity_id: {
    type: String
  },
  activity_status: {
    type: String,
    enum: ['em andamento', 'terminada']
  },

  //normalmente, envia ou valor sensoreado ou valor digitado pelo usuario
  supervised_reading: {
    identifier: String, //ex: R1, R1+R2, R2, CC1, AC1, C1...
    widget_context_id: String
  },
  user_entered_value: {
    identifier: String, //ex: R1, R1+R2, R2, CC1, AC1, C1...
    user_entered_value: String
  },

  created_date: {
    type: Date,
    default: Date.now
  }
});
module.exports = mongoose.model('UserInteractions', UserInteractionSchema);
