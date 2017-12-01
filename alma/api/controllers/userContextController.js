'use strict';
var mongoose = require('mongoose'),
  UserContext = mongoose.model('UserContexts');

exports.list_all_userContexts = function(req, res) {
  UserContext.find({}, function(err, userContext) {
    if (err)
      res.send(err);
    res.json(userContext);
  });
};

exports.create_a_userContext = function(req, res) {
  var new_context = new UserContext(req.body);
  new_context.save(function(err, userContext) {
    if (err)
      res.send(err);
    res.json(userContext);
  });
};

exports.read_a_userContext = function(req, res) {
  UserContext.findById(req.params.userContextId, function(err, userContext) {
    if (err)
      res.send(err);
    res.json(userContext);
  });
};
