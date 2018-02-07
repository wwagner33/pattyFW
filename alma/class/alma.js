function Alma(){
  //console.log("classe Alma");
};

var Activity = require('../models/activityModel'),
  Laboratory = require('../models/laboratoryModel'),
  UserContext = require('../models/userContextModel'),
  UserInteraction = require('../models/userInteractionModel'),
  User = require('../models/userModel'),
  WidgetContext = require('../models/widgetContextModel');

Alma.prototype.list_all_activities = function() {
  var promise = Activity.find();
  return promise.then( (result) => {
    return result;
  })
  .catch( (err) => {
    return err;
  });
};

Alma.prototype.create_a_activity = function(data) {
  //Recebe no formato { name: 'nome teste2', description: 'desc teste2' }
  //pode ser lido como data.name
  var content = new Activity(data);
  content.save(function(err){
    if(err){
      console.log(err);
      return err;
    }
  });
};

Alma.prototype.read_activity = function(id) {
  var promise = Activity.findById(id);
  return promise.then( (result) => {
    return result;
  })
  .catch( (err) => {
    return err;
  });
};

Alma.prototype.delete_a_activity = function(id) {
  Activity.findByIdAndRemove(id, function(err) {
    if (err){
      console.log(err);
      return err;
    }
  });
};

Alma.prototype.update_a_activity = function(data) {
  //Recebe no formato { name: 'nome teste2', description: 'desc teste2' }
  //pode ser lido como data.name
  Activity.findByIdAndUpdate(data.id, {$set: data}, {new: true}, function(err, result) {
    if (err){
      console.log(err);
      return err;
    }
  });
};

Alma.prototype.list_all_laboratories = function() {
  var promise = Laboratory.find();
  return promise.then( (result) => {
    return result;
  })
  .catch( (err) => {
    return err;
  });
};

Alma.prototype.create_a_laboratory = function(data) {
  //Recebe no formato { name: 'nome teste2', description: 'desc teste2' }
  //pode ser lido como data.name
  var content = new Laboratory(data);
  content.save(function(err){
    if(err){
      console.log(err);
      return err;
    }
  });
};

Alma.prototype.read_laboratory = function(id) {
  var promise = Laboratory.findById(id);
  return promise.then( (result) => {
    return result;
  })
  .catch( (err) => {
    return err;
  });
};

Alma.prototype.delete_a_laboratory = function(id) {
  Laboratory.findByIdAndRemove(id, function(err) {
    if (err){
      console.log(err);
      return err;
    }
  });
};

Alma.prototype.update_a_laboratory = function(data) {
  //Recebe no formato { name: 'nome teste2', description: 'desc teste2' }
  //pode ser lido como data.name
  Laboratory.findByIdAndUpdate(data.id, {$set: data}, {new: true}, function(err, result) {
    if (err){
      console.log(err);
      return err;
    }
  });
};

Alma.prototype.list_all_user_contexts = function() {
  var promise = UserContext.find();
  return promise.then( (result) => {
    return result;
  })
  .catch( (err) => {
    return err;
  });
};

Alma.prototype.create_a_user_context = function(data) {
  //Recebe no formato { name: 'nome teste2', description: 'desc teste2' }
  //pode ser lido como data.name
  var content = new UserContext(data);
  content.save(function(err){
    if(err){
      console.log(err);
      return err;
    }
  });
};

Alma.prototype.read_user_context = function(id) {
  var promise = UserContext.findById(id);
  return promise.then( (result) => {
    return result;
  })
  .catch( (err) => {
    return err;
  });
};

Alma.prototype.list_all_users = function() {
  var promise = User.find();
  return promise.then( (result) => {
    return result;
  })
  .catch( (err) => {
    return err;
  });
};

Alma.prototype.create_a_user = function(data) {
  //Recebe no formato { name: 'nome teste2', description: 'desc teste2' }
  //pode ser lido como data.name
  var content = new User(data);
  content.save(function(err){
    if(err){
      console.log(err);
      return err;
    }
  });
};

Alma.prototype.read_user = function(id) {
  var promise = User.findById(id);
  return promise.then( (result) => {
    return result;
  })
  .catch( (err) => {
    return err;
  });
};

Alma.prototype.read_user_by_cpf = function(cpf) {
  var promise = User.findOne({cpf:cpf);
  return promise.then( (result) => {
    return result;
  })
  .catch( (err) => {
    return err;
  });
};

Alma.prototype.delete_a_user = function(id) {
  User.findByIdAndRemove(id, function(err) {
    if (err){
      console.log(err);
      return err;
    }
  });
};

Alma.prototype.update_a_user = function(data) {
  //Recebe no formato { name: 'nome teste2', description: 'desc teste2' }
  //pode ser lido como data.name
  User.findByIdAndUpdate(data.id, {$set: data}, {new: true}, function(err, result) {
    if (err){
      console.log(err);
      return err;
    }
  });
};

Alma.prototype.authenticate = function(login,password) {
  /*var promise = User.findById(id);
  return promise.then( (result) => {
    return result;
  })
  .catch( (err) => {
    return err;
  });*/
};

Alma.prototype.list_all_user_interactions = function() {
  var promise = UserInteraction.find();
  return promise.then( (result) => {
    return result;
  })
  .catch( (err) => {
    return err;
  });
};

Alma.prototype.create_a_user_interaction = function(data) {
  //Recebe no formato { name: 'nome teste2', description: 'desc teste2' }
  //pode ser lido como data.name
  var content = new UserInteraction(data);
  content.save(function(err){
    if(err){
      console.log(err);
      return err;
    }
  });
};

Alma.prototype.read_user_interaction = function(id) {
  var promise = UserInteraction.findById(id);
  return promise.then( (result) => {
    return result;
  })
  .catch( (err) => {
    return err;
  });
};

Alma.prototype.list_all_widget_contexts = function() {
  var promise = WidgetContext.find();
  return promise.then( (result) => {
    return result;
  })
  .catch( (err) => {
    return err;
  });
};

Alma.prototype.create_a_widget_context = function(data) {
  //Recebe no formato { name: 'nome teste2', description: 'desc teste2' }
  //pode ser lido como data.name
  var content = new WidgetContext(data);
  content.save(function(err){
    if(err){
      console.log(err);
      return err;
    }
  });
};

Alma.prototype.read_widget_context = function(id) {
  var promise = WidgetContext.findById(id);
  return promise.then( (result) => {
    return result;
  })
  .catch( (err) => {
    return err;
  });
};

// *******************
// *** PERFORMANCE ***

// teste de fato
Alma.prototype.performance_test = function(qtd) {
  for(var i = 0; i<qtd; i++) {

    var us = read_user_by_cpf(i);

    var datauc = new UserContext();
    var datawc = new WidgetContext();
    var data = new UserInteraction();

    console.log('adicionando ação '+i);
    data.save(function(err){
      if(err){
        console.log(err);
        return err;
      }
    });
  }
}

// pós tratamento - remocao de usuarios
Alma.prototype.performance_delete_users = function(qtd) {
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
Alma.prototype.performance_create_users = function(qtd) {
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
Alma.prototype.performance_create_activity = function() {
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
/*
  data.question.item.position = 1;
  data.question.item.quantity = 2;
  data.question.item.value = 1;
  data.question.item.unit= "Kohm";
  data.question.item.disposition = "parallel"; //['unique', 'serial', 'parallel']
  data.question.item.type= "[R]esistor";//['[R]esistor', '[CC] source', '[AC] source', '[C]apacitor']

  data.question.item.position = 2;
  data.question.item.quantity = 1;
  data.question.item.value = 1;
  data.question.item.unit= "Kohm";
  data.question.item.disposition = "serial"; //['unique', 'serial', 'parallel']
  data.question.item.type= "[R]esistor";//['[R]esistor', '[CC] source', '[AC] source', '[C]apacitor']
*/
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

// *******************

module.exports = Alma;
