function Performance(){
  //console.log("classe Alma");
};

var Activity = require('../models/activityModel'),
  Laboratory = require('../models/laboratoryModel'),
  UserContext = require('../models/userContextModel'),
  UserInteraction = require('../models/userInteractionModel'),
  User = require('../models/userModel'),
  WidgetContext = require('../models/widgetContextModel');
var Alma = require('../class/alma')


Performance.prototype.performance_test_unique = function(cpf,
                                      activity_id, user_position,
                                      logged, widget_context, st,
                                      supervised_reading, user_value) {
  var alma = new Alma();

  //reading user data
  var us = alma.read_user_by_criteria( [{fieldName: "cpf", value:cpf}] );
  us.then( (doc) => {
    var idus = doc[0].id;    
    //generates user context data
    var userc = alma.create_a_user_context({user_id:idus,
                                  user_position: user_position,
                                  logged: logged});
    userc.then( (doc2) => {
      var iduserc = doc2.id;
      //generates widget context data
      var widgetc = alma.create_a_widget_context(widget_context);
      widgetc.then( (doc3) => {
        var idwidgetc = doc3.id;
        //generates user interaction data
        alma.create_a_user_interaction( { user_context_id: iduserc,
                                  widget_context_id: idwidgetc,
                                  activity_id: activity_id,
                                  activity_status: st,
                                  supervised_reading: supervised_reading,
                                  user_entered_value: user_value });
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

}

Performance.prototype.performance_test_batch = function(qtd) {
  var alma = new Alma();

  //atividade: associacao de resistores
  var activity_id = "5a7b166fe9f64a0ffcaa450c";

  var max = 3;
  var min = 1;
  var medicoes=1;

  //para cada usuario
  for(var i = 0; i<qtd; i++) {
    //cada usuario a participar do teste
    var us = alma.read_user_by_criteria([{fieldName: "cpf", value:i}]);
    us.then( (doc) => {
      var idus = doc[0].id;
      var userc = alma.create_a_user_context( { user_id:idus, user_position: 'Lab1 B1', logged: false } );
      userc.then( (doc2) => {
        var iduserc = doc2.id;

        for(var y = 1; y<=medicoes; y++) {
          var st = "";
          if (y<medicoes)
            st = 'em andamento';
          else
            st = 'terminada';

          //gera valor ponto flutuante lido entre max e min
          var lido = Math.random() * (max - min) + min;

          var widgetc = alma.create_a_widget_context( { sensored_type: 'Resistor', sensored_unit: 'Kohm', sensored_value: lido , widget_position: 'Lab1 B1' });
          widgetc.then( (doc3) => {
            var idwidgetc = doc3.id;

            alma.create_a_user_interaction( { user_context_id: iduserc, widget_context_id: idwidgetc, activity_id: activity_id, activity_status: st, supervised_reading: 'R1+R2+R3', user_entered_value: + 1.5 });
          })
          .catch( (err) => {
            console.log(err);
          });
        }//fim das medicoes do usuario

      })
      .catch( (err) => {
        console.log(err);
      });
    });
  }//fim dos usuarios
}

// pós tratamento - remocao de usuarios e interacoes de usuarios
Performance.prototype.performance_delete_interactions = function() {
  UserContext.remove({}, function(err) {
    if (err){
      console.log(err);
      return err;
    }
  });
  WidgetContext.remove({}, function(err) {
    if (err){
      console.log(err);
      return err;
    }
  });
  UserInteraction.remove({}, function(err) {
    if (err){
      console.log(err);
      return err;
    }
  });
};

Performance.prototype.performance_delete_users = function(qtd) {
  for(var i = 0; i<qtd; i++) {
    console.log('removendo cpf '+i);
    User.remove({cpf:i}, function(err) {
      if (err){
        console.log(err);
        return err;
      }
    });
  }
};
// pré tratamento - criacao de atividade e usuarios
Performance.prototype.performance_create_unique_user = function(name, cpf, email, login, senha) {
  var data = new User();
  data.name=name;
  data.cpf=cpf;
  data.email=email;
  data.login=login;
  data.senha=senha;

  console.log('adicionando cpf '+cpf);
  data.save(function(err){
    if(err){
      console.log(err);
      return err;
    }
  });
}

Performance.prototype.performance_create_users = function(qtd) {
  for(var i = 0; i<qtd; i++) {

    var data = new User();
    data.name="usuario de teste"+i;
    data.cpf=""+i;
    data.email=i+"@qq.com";

    console.log('adicionando cpf '+i);
    data.save(function(err){
      if(err){
        console.log(err);
        return err;
      }
    });
  }
}

Performance.prototype.performance_create_activity = function() {
  //Recebe no formato { name: 'nome teste2', description: 'desc teste2' }
  //pode ser lido como data.name
  var data = new Activity();

  data.name= 'associacao de resistores';
  data.description= '';
  data.laboratory_id= '5a2e9ebd6458f51b34a05389';
  data.questions_quantity= 1;

  data.question.order = 1;

  data.question.item.push({position:1, quantity:2, value:1, unit:'Kohm', disposition:'parallel', type:'[R]esistor'});
  data.question.item.push({position:2, quantity:1, value:1, unit:'Kohm', disposition:'serial', type:'[R]esistor'});

  data.question.supervised_reading = "R1 + R2 + R3";
  data.question.expected_value = 1.5;
  console.log(data);
  data.save(function(err){
    if(err){
      console.log(err);
      return err;
    }
  });
};

module.exports = Performance;
