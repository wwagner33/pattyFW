'use strict';
let mongoose = require('mongoose'),
  UserContext = mongoose.model('UserContexts');

exports.create_a_userContext = function(req, res) {
  let new_context = new UserContext(req.body);
  new_context.save(function(err, userContext) {
    if (err)
      res.send(err);
    res.json(userContext);
  });
};

// REMOVER
exports.read_a_userContext = function(req, res) {
  UserContext.findById(req.params.userContextId, function(err, userContext) {
    if (err)
      res.send(err);
    res.json(userContext);
  });
};
