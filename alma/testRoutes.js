'use strict';
module.exports = function(app) {
  var Alma = require('./class/alma')
  var alma = new Alma();

  var Performance = require('./test/Performance')
  var performance = new Performance();

  app.get('/performance_test_batch/:qtde', function(req, res) {
    performance.performance_test_batch(req.params.qtde);
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

    performance.performance_test_unique(cpf, activity_id, position, logged, widget_context, st, supervised_reading, user_value);
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

    performance.performance_create_unique_user(name, cpf, email, login, senha);
    res.render('pages/performance',
      { 'data': 'teste criacao usuario' }
    );
  });

  app.get('/performance_list_activity_user/:qtde', function(req, res) {
    var max = req.params.qtde-1;
    var cpf = Math.floor(Math.random() * (max - 0 + 1) + 0);
    var result;

    var us = alma.read_user_by_criteria( [{fieldName: "cpf", value:cpf}] );

    us.then( (doc1) => {
      //console.log("\n-----user_id:"+doc1[0].id);

      var usc = alma.read_user_context_by_criteria( [{fieldName: "user_id", value:doc1[0].id}] );
      usc.then( (doc2) => {

        var arrayUcId = Array();
        for (var i=0;i<doc2.length;i++){
          arrayUcId[i] = doc2[i].id;
        }
        //console.log("\n-----user_context_id:"+arrayUcId);

        var ui = alma.read_user_interaction_by_arrayId( arrayUcId );
        ui.then( (doc3) => {
          var arrayUiId = Array();
          for (var i=0;i<doc3.length;i++){
            arrayUiId[i] = doc3[i].widget_context_id;
          }
          //console.log("\n-----widget_context_id:"+arrayUiId);

          var wc = alma.read_widget_context_by_arrayId( arrayUiId );
          wc.then( (doc4) => {
            result = (doc1+doc2+doc3+doc4);
            res.render('pages/performance',
              { 'data': result }
            );
          })
          .catch( (err) => {
            console.log(err);
          });

        })
        .catch( (err) => {
          console.log(err);
        });

      })
      .catch( (err) => {
        console.log(err);
      });

    })
    .catch( (err) => {
      console.log(err);
    });
  });

  app.get('/performance_create_activity', function(req, res) {
    performance.performance_create_activity();
    res.render('pages/performance',
      { 'data': 'teste' }
    );
  });

  app.get('/performance_create_users/:qtde', function(req, res) {
    performance.performance_create_users(req.params.qtde);
    res.render('pages/performance',
      { 'data': 'teste' }
    );
  });

  app.get('/performance_delete_users/:qtde', function(req, res) {
    performance.performance_delete_users(req.params.qtde);
    res.render('pages/performance',
      { 'data': 'teste' }
    );
  });
  
  app.get('/performance_delete_interactions', function(req, res) {
    performance.performance_delete_interactions(req.params.qtde);
    res.render('pages/performance',
      { 'data': 'teste' }
    );
  });

}
