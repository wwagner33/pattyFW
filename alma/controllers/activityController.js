'use strict';
var mongoose = require('mongoose'),
  Activity = mongoose.model('Activities');

// REMOVER TUDO

exports.read_a_activity = function(req, res) {
  Activity.findById(req.params.activityId, function(err, activity) {
    if (err)
      res.send(err);
    res.json(activity);
  });
};

exports.update_a_activity = function(req, res) {
  //{upsert: true} // (opcional) se nao existir com esse criterio, sera criado
  //{new: true}    // (opcional) para retornar o documento atualizado
  Activity.findOneAndUpdate({_id: req.params.activityId}, req.body, {new: true}, function(err, activity) {
    if (err)
      res.send(err);
    res.json(activity);
  });
};

exports.delete_a_activity = function(req, res) {
  Activity.remove({_id: req.params.activityId}, function(err, activity) {
    if (err)
      res.send(err);
    res.json({ message: 'Activity deleted' });
  });
};
