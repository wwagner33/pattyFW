'use strict';
var mongoose = require('mongoose'),
  Laboratory = mongoose.model('Laboratories');

// REMOVER TUDO

exports.read_a_laboratory = function(req, res) {
  Laboratory.findById(req.params.laboratoryId, function(err, laboratory) {
    if (err)
      res.send(err);
    res.json(laboratory);
  });
};

exports.update_a_laboratory = function(req, res) {
  Laboratory.findOneAndUpdate({_id: req.params.laboratoryId}, req.body, {new: true}, function(err, laboratory) {
    if (err)
      res.send(err);
    res.json(laboratory);
  });
};

exports.delete_a_laboratory = function(req, res) {
  Laboratory.remove({_id: req.params.laboratoryId}, function(err, laboratory) {
    if (err)
      res.send(err);
    res.json({ message: 'Laboratory deleted' });
  });
};
