'use strict';
module.exports = function(app) {
  var Alma = require('./class/alma')
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
  app.get('/performance_test_batch/:qtde', function(req, res) {
    alma.performance_test_batch(req.params.qtde);
    res.render('pages/performance',
      { 'data': 'teste' }
    );
  });
  app.get('/performance_test_unique/:qtde', function(req, res) {
    var max = req.params.qtde-1;
    //sorteia usuario com cpf entre 0 e max
    var cpf = Math.floor(Math.random() * (max - 0 + 1) + 0);
    //atividade: associacao de resistores
    var activity_id = "5a7b166fe9f64a0ffcaa450c";
    //posicao entre lab 1 e lab20
    var lab = Math.floor(Math.random() * (20 - 1 + 1) + 1);
    var position = 'Lab1 B'+lab;

    var st = 'em andamento';
    var logged = false;
    var supervised_reading = 'R1+R2+R3';
    var user_value = 1.5

    //gera valor ponto flutuante lido entre max e min
    max = 3;
    var min = 1;
    var lido = Math.random() * (max - min) + min;

    var widget_context = {sensored_type: 'Resistor', sensored_unit: 'Kohm', sensored_value: lido , widget_position: position};

    alma.performance_test_unique(cpf, activity_id, position, logged, widget_context, st, supervised_reading, user_value);
    res.render('pages/performance',
      { 'data': 'teste envio atividade' }
    );
  });
  app.get('/performance_create_unique_user/:qtde', function(req, res) {
    var max = req.params.qtde-1;
    var sorteio = Math.floor(Math.random() * (max - 0 + 1) + 0);
    var name="usuario de teste"+sorteio;
    var cpf=sorteio;
    var email=sorteio+"@qq.com";
    var login="login"+sorteio;
    var senha = "senhaqq"+sorteio;

    alma.performance_create_unique_user(name, cpf, email, login, senha);
    res.render('pages/performance',
      { 'data': 'teste criacao usuario' }
    );
  });
  app.get('/performance_list_activity_user/:qtde', function(req, res) {
    var max = req.params.qtde-1;
    var cpf = Math.floor(Math.random() * (max - 0 + 1) + 0);
    var result = alma.performance_list_activity_user(cpf);
    console.log(result);
    res.render('pages/performance',
      { 'data': result }
    );
  });

  app.get('/performance_create_activity', function(req, res) {
    alma.performance_create_activity();
    res.render('pages/performance',
      { 'data': 'teste' }
    );
  });
  app.get('/performance_create_users/:qtde', function(req, res) {
    alma.performance_create_users(req.params.qtde);
    res.render('pages/performance',
      { 'data': 'teste' }
    );
  });
  app.get('/performance_delete_users/:qtde', function(req, res) {
    alma.performance_delete_users(req.params.qtde);
    res.render('pages/performance',
      { 'data': 'teste' }
    );
  });
  app.get('/performance_delete_interactions', function(req, res) {
    alma.performance_delete_interactions(req.params.qtde);
    res.render('pages/performance',
      { 'data': 'teste' }
    );
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
  app.get('/test_show_by_cpf/:cpf', function(req, res) {
    var result = alma.read_user_by_criteria([{fieldName: "cpf", value:req.params.cpf}]);
    result.then( function(doc) {
      res.render('pages/test_show',
        { 'data': doc }
      );
    });
  });
  //testa list
  app.get('/test_list', function(req, res) {
    //var result = alma.list_all_laboratories();
    var result = alma.list_all_user_contexts();
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
  app.get('/create_a_test', function(req, res) {
    var result = alma.create_a_user_context( { user_id: '5a7cba95a11a2725b8a3892e', user_position: 'Lab1 B1', logged: false } );
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
