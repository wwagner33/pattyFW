'use strict';
var mongoose = require('mongoose'),
  WidgetContext = mongoose.model('WidgetContexts');

exports.list_all_widgetContexts = function(req, res) {
  WidgetContext.find({}, function(err, widgetContext) {
    if (err)
      res.send(err);
    res.json(widgetContext);
  });
};

exports.create_a_widgetContext = function(req, res) {
  var new_context = new UserContext(req.body);
  new_context.save(function(err, widgetContext) {
    if (err)
      res.send(err);
    res.json(widgetContext);
  });
};

exports.read_a_widgetContext = function(req, res) {
  User.findById(req.params.widgetContextId, function(err, widgetContext) {
    if (err)
      res.send(err);
    res.json(widgetContext);
  });
};
