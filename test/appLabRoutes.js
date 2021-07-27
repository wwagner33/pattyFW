'use strict';
module.exports = function(app) {
  let Alma = require('../class/alma')
  let alma = new Alma();

  app.get('/activities', function(req, res) {
    let result = alma.list_all_activities();
    result.then( function(doc) {
      res.render('../test/views/pages/list_activities',
        { 'data': doc }
      );
    })
    .catch( (err) => {
      console.log(err);
    });
  });

  app.get('/new_activity', function(req, res) {
    let result = alma.list_all_laboratories();
    result.then( function(data) {
      res.render('../test/views/pages/new_activity',
        { 'data': data }
      );
    })
    .catch( (err) => {
      console.log(err);
    });
  });

  app.post('/create_a_activity', function(req, res) {
    console.log("\n\nreq.body:\n");
    console.log(req.body);

    let erro = alma.create_a_complete_activity(req.body || {})

    /*
name: 'teste',
description: 'teste',
enunc1: 'teste',
tipo:
 [ '[CC] source',
   '[CC] source',
   '[R]esistor',
   '[C]apacitor',
   '[R]esistor' ],
voltagem0: '5',
freq0: '60',
voltagem1: '5',
freq1: '60',
qtdeRes0: '2',
dispRes0: 'Paralela',
R1: '5',
R2: '10',
qtdeCap0: '2',
dispCap0: 'Paralela',
C1: '7',
C2: '8',
qtdeRes1: '2',
dispRes1: 'Serial',
R3: '15',
R4: '15',
respostaImg: '-',
respostaQtdLeituras: '2',
el1: 'r1 e r2',
elv1: '5',
elu1: 'v',
el2: 'c2',
elv2: '5',
elu2: 'a'
    */
    //let erro = alma.create_a_activity(req.body || {});
    //res.redirect('/activities');
  });

  app.get('/activity/:id', function(req, res) {
    let result = alma.read_activity(req.params.id);
    result.then( function(doc) {
      res.render('../test/views/pages/show_activity',
        { 'data': doc }
      );
    });
  });

  app.get('/delete_a_activity/:id', function(req, res) {
    let erro = alma.delete_a_activity(req.params.id);
    res.redirect('/activities');
  });

  app.get('/edit_activity/:id', function(req, res) {
    let result = alma.read_activity(req.params.id);
    result.then( function(doc) {
      res.render('../test/views/pages/edit_activity',
        { 'data': doc }
      );
    });
  });

  app.post('/update_a_activity', function(req, res) {
    let erro = alma.update_a_activity(req.body || {});
    res.redirect('/activities');
  });

    // *** PAG TESTE ***
  app.get('/test_new', function(req, res) {
    res.render('../test/views/pages/test_new');
  });
  app.get('/test_show/:id', function(req, res) {
    let result = alma.read_widget_context(req.params.id);
    result.then( function(doc) {
      res.render('../test/views/pages/test_show',
        { 'data': doc }
      );
    });
  });
  app.get('/test_show_by_cpf/:cpf', function(req, res) {
    let result = alma.read_user_by_criteria([{fieldName: "cpf", value:req.params.cpf}]);
    result.then( function(doc) {
      res.render('../test/views/pages/test_show',
        { 'data': doc }
      );
    });
  });
  //testa list
  app.get('/test_list', function(req, res) {
    //let result = alma.list_all_laboratories();
    let result = alma.list_all_user_contexts();
    result.then( function(doc) {
      res.render('../test/views/pages/test_list',
        { 'data': doc }
      );
    })
    .catch( (err) => {
      console.log(err);
    });
  });
  //testa create
  app.post('/create_a_test', function(req, res) {
    let erro = alma.create_a_widget_context(req.body || {});
    res.redirect('/test_list');
  });
  app.get('/create_a_test', function(req, res) {
    let result = alma.create_a_user_context( { user_id: '5a7cba95a11a2725b8a3892e', user_position: 'Lab1 B1', logged: false } );
    res.redirect('/test_list');
  });
  //testa delete
  app.get('/test_delete/:id', function(req, res) {
    let erro = alma.delete_a_user(req.params.id);
    res.redirect('/test_list');
  });
  //testa update
  app.get('/test_edit/:id', function(req, res) {
    let result = alma.read_user(req.params.id);
    result.then( function(doc) {
      res.render('../test/views/pages/test_edit',
        { 'data': doc }
      );
    });
  });
  app.post('/update_a_test', function(req, res) {
    let erro = alma.update_a_user(req.body || {});
    res.redirect('/test_list');
  });

}
