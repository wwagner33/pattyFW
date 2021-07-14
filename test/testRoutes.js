'use strict';
module.exports = function(app) {
  let Alma = require('../class/alma');
  let alma = new Alma();

  let Performance = require('./performance');
  let performance = new Performance();

  app.get('/performance_test_batch/:qtde', function(req, res) {
    performance.performance_test_batch(req.params.qtde);
    res.render('pages/performance',
      { 'data': 'Roda batch de teste' }
    );
  });

  app.get('/performance_test_unique/', function(req, res) {
    let max = req.params.qtde-1;
    //sorteia usuario com cpf entre 0 e max
    let cpf = Math.floor(Math.random() * (max - 0 + 1) + 0);
    //atividade: associacao de resistores
    let activity_id = "5a7b166fe9f64a0ffcaa450c";
    //posicao entre lab 1 e lab20
    let lab = Math.floor(Math.random() * (20 - 1 + 1) + 1);
    let position = 'Lab1 B'+lab;

    let st = 'em andamento';
    let logged = false;
    let supervised_reading = 'R1+R2+R3';
    let user_value = 1.5

    //gera valor ponto flutuante lido entre max e min
    max = 3;
    let min = 1;
    let lido = Math.random() * (max - min) + min;

    let widget_context = {sensored_type: 'Resistor', sensored_unit: 'Kohm', sensored_value: lido , widget_position: position};

    performance.performance_test_unique(cpf, activity_id, position, logged, widget_context, st, supervised_reading, user_value);
    res.render('pages/performance',
      { 'data': 'teste envio atividade' }
    );
  });

  app.get('/performance_create_unique_user/:qtde', function(req, res) {
    let max = req.params.qtde-1;
    let sorteio = Math.floor(Math.random() * (max - 0 + 1) + 0);
    let name="usuario de teste"+sorteio;
    let cpf=sorteio;
    let email=sorteio+"@qq.com";
    let login="login"+sorteio;
    let senha = "senhaqq"+sorteio;

    performance.performance_create_unique_user(name, cpf, email, login, senha);
    res.render('pages/performance',
      { 'data': 'teste criacao usuario' }
    );
  });

  app.get('/performance_list_activity_user/:qtde', function(req, res) {
    let max = req.params.qtde-1;
    let cpf = Math.floor(Math.random() * (max - 0 + 1) + 0);
    let result;

    let us = alma.read_user_by_criteria( [{fieldName: "cpf", value:cpf}] );

    us.then( (doc1) => {
      //console.log("\n-----user_id:"+doc1[0].id);

      let usc = alma.read_user_context_by_criteria( [{fieldName: "user_id", value:doc1[0].id}] );
      usc.then( (doc2) => {

        let arrayUcId = Array();
        for (let i=0;i<doc2.length;i++){
          arrayUcId[i] = doc2[i].id;
        }
        //console.log("\n-----user_context_id:"+arrayUcId);

        let ui = alma.read_user_interaction_by_arrayId( arrayUcId );
        ui.then( (doc3) => {
          let arrayUiId = Array();
          for (let i=0;i<doc3.length;i++){
            arrayUiId[i] = doc3[i].widget_context_id;
          }
          //console.log("\n-----widget_context_id:"+arrayUiId);

          let wc = alma.read_widget_context_by_arrayId( arrayUiId );
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
      { 'data': 'Criação de Usuários' }
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
