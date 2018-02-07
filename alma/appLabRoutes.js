'use strict';
module.exports = function(app) {
  var Alma = require('./class/Alma')
  var alma = new Alma();

  app.get('/activities', function(req, res) {
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
    res.redirect('/activities');
  });

  app.get('/activity/:id', function(req, res) {
    var result = alma.read_activity(req.params.id);
    result.then( function(doc) {
      res.render('pages/show_activity',
        { 'data': doc }
      );
    });
  });

  app.get('/delete_a_activity/:id', function(req, res) {
    var erro = alma.delete_a_activity(req.params.id);
    res.redirect('/activities');
  });

  app.get('/edit_activity/:id', function(req, res) {
    var result = alma.read_activity(req.params.id);
    result.then( function(doc) {
      res.render('pages/edit_activity',
        { 'data': doc }
      );
    });
  });

  app.post('/update_a_activity', function(req, res) {
    var erro = alma.update_a_activity(req.body || {});
    res.redirect('/activities');
  });

  // *** TESTE PERFORMANCE ***
  app.get('/performance_create_activity', function(req, res) {
    alma.performance_create_activity();
    res.redirect('/activities');
  });
  app.get('/performance_create_users/:qtde', function(req, res) {
    alma.performance_create_users(req.params.qtde);
    res.redirect('/activities');
  });
  app.get('/performance_delete_users/:qtde', function(req, res) {
    alma.performance_delete_users(req.params.qtde);
    res.redirect('/activities');
  });

  // *** TESTES ***
  app.get('/test_new', function(req, res) {
    res.render('pages/test_new');
  });
  app.get('/test_show/:id', function(req, res) {
    var result = alma.read_widget_context(req.params.id);
    result.then( function(doc) {
      res.render('pages/test_show',
        { 'data': doc }
      );
    });
  });
  //testa list
  app.get('/test_list', function(req, res) {
    var result = alma.list_all_laboratories();
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
  //testa delete
  app.get('/test_delete/:id', function(req, res) {
    var erro = alma.delete_a_user(req.params.id);
    res.redirect('/test_list');
  });
  //testa update
  app.get('/test_edit/:id', function(req, res) {
    var result = alma.read_user(req.params.id);
    result.then( function(doc) {
      res.render('pages/test_edit',
        { 'data': doc }
      );
    });
  });
  app.post('/update_a_test', function(req, res) {
    var erro = alma.update_a_user(req.body || {});
    res.redirect('/test_list');
  });

}
