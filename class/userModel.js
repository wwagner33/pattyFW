'use strict';
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let UserSchema = new Schema({
  name: {
    type: String,
    required: 'Enter the name of the user'
  },
  cpf: String,
  email: {
    type: String,
    required: 'Enter the email of the user'
  },
  login: {
    type: String
  },
  tag: {
    type: String
  },
  password: {
    type: String
  },
  permission: { // { ou {[
    action: {
      type: String,
      enum: ['lab', 'usr', 'atv']
    },
    level: {
      type: String,
      enum: ['R', 'X'] //leitura, crud
    }
  }, // } ou ]}
  created_date: {
    type: Date,
    default: Date.now
  }
});
module.exports = mongoose.model('Users', UserSchema);
