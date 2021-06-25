'use strict';
let mongoose = require('mongoose'),
  UserInteraction = mongoose.model('UserInteractions');

exports.list_all_userInteractions = function(req, res) {
  UserInteraction.find({}, function(err, userInteraction) {
    if (err)
      res.send(err);
    res.json(userInteraction);
  });
};

// REMOVER
exports.read_a_userInteraction = function(req, res) {
  UserInteraction.findById(req.params.userInteractionId, function(err, userInteraction) {
    if (err)
      res.send(err);
    res.json(userInteraction);
  });
};
