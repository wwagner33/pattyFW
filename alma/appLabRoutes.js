'use strict';
module.exports = function(app) {
  var Alma = require('./class/Alma')
  var alma = new Alma();

  app.get('/list_activities', function(req, res) {
    var result = alma.list_all_activities();
    result.then( function(doc) {
      res.render('pages/list_activities',
        { 'data': doc }
      );
    })
    .catch( (err) => {
      console.log(err);
    });
  });

  app.get('/new_activity', function(req, res) {
    res.render('pages/new_activity');
  });

  app.post('/create_a_activity', function(req, res) {
    var erro = alma.create_a_activity(req.body || {});
    res.redirect('/list_activities');
  });

  app.get('/activities/:id', function(req, res) {
    var result = alma.read_activity(req.params.id);
    result.then( function(doc) {
      res.render('pages/show_activity',
        { 'data': doc }
      );
    });
  });

  // *** TESTES ***
  app.get('/test_new', function(req, res) {
    res.render('pages/test_new');
  });
  //testa list
  app.get('/test_list', function(req, res) {
    var result = alma.list_all_widget_contexts();
    result.then( function(doc) {
      res.render('pages/test_list',
        { 'data': doc }
      );
    })
    .catch( (err) => {
      console.log(err);
    });
  });
  //testa create
  app.post('/create_a_test', function(req, res) {
    var erro = alma.create_a_widget_context(req.body || {});
    res.redirect('/test_list');
  });

}
