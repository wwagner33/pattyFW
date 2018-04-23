function Alma(){

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

Alma.prototype.read_activity_by_criteria = function(filters) {
  var query = Activity.find();

  for (var i = 0; i < filters.length; i++) {
    query.where(filters[i].fieldName).equals(filters[i].value)
  }
  var promise = query.exec();

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

Alma.prototype.read_laboratory_by_criteria = function(filters) {
  var query = Laboratory.find();

  for (var i = 0; i < filters.length; i++) {
    query.where(filters[i].fieldName).equals(filters[i].value)
  }
  var promise = query.exec();

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
  return content.save().then(function(err) {
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

Alma.prototype.read_user_context_by_criteria = function(filters) {
  //formato filters = [{fieldName: "year", value: "2014"}, {fieldName: "cat", value: "sonny"}];
  var query = UserContext.find();

  for (var i = 0; i < filters.length; i++) {
    query.where(filters[i].fieldName).equals(filters[i].value)
  }
  var promise = query.exec();

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

Alma.prototype.read_user_by_criteria = function(filters) {
  //formato filters = [{fieldName: "year", value: "2014"}, {fieldName: "cat", value: "sonny"}];
  var query = User.find();

  for (var i = 0; i < filters.length; i++) {
    query.where(filters[i].fieldName).equals(filters[i].value)
  }
  var promise = query.exec();

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

Alma.prototype.read_user_interaction_by_criteria = function(filters) {
  //formato filters = [{fieldName: "year", value: "2014"}, {fieldName: "cat", value: "sonny"}];
  var query = UserInteraction.find();

  for (var i = 0; i < filters.length; i++) {
    query.where(filters[i].fieldName).equals(filters[i].value)
  }
  var promise = query.exec();

  return promise.then( (result) => {
    return result;
  })
  .catch( (err) => {
    return err;
  });
};

Alma.prototype.read_user_interaction_by_arrayId = function(arrayId) {
  var promise = UserInteraction.find({ 'user_context_id': {$in: Array.from(arrayId)}}).exec();
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
  return content.save().then(function(err) {
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

Alma.prototype.read_widget_context_by_criteria = function(filters) {
  //formato filters = [{fieldName: "year", value: "2014"}, {fieldName: "cat", value: "sonny"}];
  var query = WidgetContext.find();

  for (var i = 0; i < filters.length; i++) {
    query.where(filters[i].fieldName).equals(filters[i].value)
  }
  var promise = query.exec();

  return promise.then( (result) => {
    return result;
  })
  .catch( (err) => {
    return err;
  });
};

Alma.prototype.read_widget_context_by_arrayId = function(arrayId) {
  var promise = WidgetContext.find({'_id': {$in: Array.from(arrayId)}}).exec();
  return promise.then( (result) => {
    return result;
  })
  .catch( (err) => {
    return err;
  });
};



Alma.prototype.create_a_complete_activity = function(activity) {
  //Recebe no formato { name: 'nome teste2', description: 'desc teste2' }
  //pode ser lido como data.name
  var data = new Activity();

  data.name= activity.name;
  data.description= activity.description;
  data.laboratory_id= activity.laboratorio;
  data.questions_quantity= 1;

  data.question.order = 1;
  data.question.image = activity.respostaImg;

  console.log("\n\n*****\n"+activity);
  for (var i in data){
    //console.log(activity.tipo);
  }

  data.question.item.push({position:1, quantity:2, value:1, unit:'Kohm', disposition:'parallel', type:'[R]esistor'});
  data.question.item.push({position:2, quantity:1, value:1, unit:'Kohm', disposition:'serial', type:'[R]esistor'});

  data.question.supervised_reading.push({element:'r1 e r2', expected_value:5, unit:'V'});

  data.save(function(err){
    if(err){
      console.log(err);
      return err;
    }
  });
};

module.exports = Alma;
