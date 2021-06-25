'use strict';
let mongoose = require('mongoose'),
  WidgetContext = mongoose.model('WidgetContexts');

exports.create_a_widgetContext = function(req, res) {
  let new_context = new WidgetContext(req.body);
  new_context.save(function(err, widgetContext) {
    if (err)
      res.send(err);
    res.json(widgetContext);
  });
};

// REMOVER TUDO
exports.read_a_widgetContext = function(req, res) {
  WidgetContext.findById(req.params.widgetContextId, function(err, widgetContext) {
    if (err)
      res.send(err);
    res.json(widgetContext);
  });
};
