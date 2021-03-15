function Alma(){

};

let Activity = require('../models/activityModel'),
  Laboratory = require('../models/laboratoryModel'),
  UserContext = require('../models/userContextModel'),
  UserInteraction = require('../models/userInteractionModel'),
  User = require('../models/userModel'),
  WidgetContext = require('../models/widgetContextModel');

Alma.prototype.list_all_activities = function() {
  let promise = Activity.find();
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
  let content = new Activity(data);
  content.save(function(err){
    if(err){
      console.log(err);
      return err;
    }
  });
};

Alma.prototype.read_activity = function(id) {
  let promise = Activity.findById(id);
  return promise.then( (result) => {
    return result;
  })
  .catch( (err) => {
    return err;
  });
};

Alma.prototype.read_activity_by_criteria = function(filters) {
  let query = Activity.find();

  for (let i = 0; i < filters.length; i++) {
    query.where(filters[i].fieldName).equals(filters[i].value)
  }
  let promise = query.exec();

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
  let promise = Laboratory.find();
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
  let content = new Laboratory(data);
  content.save(function(err){
    if(err){
      console.log(err);
      return err;
    }
  });
};

Alma.prototype.read_laboratory = function(id) {
  let promise = Laboratory.findById(id);
  return promise.then( (result) => {
    return result;
  })
  .catch( (err) => {
    return err;
  });
};

Alma.prototype.read_laboratory_by_criteria = function(filters) {
  let query = Laboratory.find();

  for (let i = 0; i < filters.length; i++) {
    query.where(filters[i].fieldName).equals(filters[i].value)
  }
  let promise = query.exec();

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
  let promise = UserContext.find();
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
  let content = new UserContext(data);
  return content.save().then(function(err) {
    if(err){
      console.log(err);
      return err;
    }
  });
};

Alma.prototype.read_user_context = function(id) {
  let promise = UserContext.findById(id);
  return promise.then( (result) => {
    return result;
  })
  .catch( (err) => {
    return err;
  });
};

Alma.prototype.read_user_context_by_criteria = function(filters) {
  //formato filters = [{fieldName: "year", value: "2014"}, {fieldName: "cat", value: "sonny"}];
  let query = UserContext.find();

  for (let i = 0; i < filters.length; i++) {
    query.where(filters[i].fieldName).equals(filters[i].value)
  }
  let promise = query.exec();

  return promise.then( (result) => {
    return result;
  })
  .catch( (err) => {
    return err;
  });
};

Alma.prototype.list_all_users = function() {
  let promise = User.find();
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
  let content = new User(data);
  content.save(function(err){
    if(err){
      console.log(err);
      return err;
    }
  });
};

Alma.prototype.read_user = function(id) {
  let promise = User.findById(id);
  return promise.then( (result) => {
    return result;
  })
  .catch( (err) => {
    return err;
  });
};

Alma.prototype.read_user_by_criteria = function(filters) {
  //formato filters = [{fieldName: "year", value: "2014"}, {fieldName: "cat", value: "sonny"}];
  let query = User.find();

  for (let i = 0; i < filters.length; i++) {
    query.where(filters[i].fieldName).equals(filters[i].value)
  }
  let promise = query.exec();

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
  /*let promise = User.findById(id);
  return promise.then( (result) => {
    return result;
  })
  .catch( (err) => {
    return err;
  });*/
};

Alma.prototype.list_all_user_interactions = function() {
  let promise = UserInteraction.find();
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
  let content = new UserInteraction(data);
  content.save(function(err){
    if(err){
      console.log(err);
      return err;
    }
  });
};

Alma.prototype.read_user_interaction = function(id) {
  let promise = UserInteraction.findById(id);
  return promise.then( (result) => {
    return result;
  })
  .catch( (err) => {
    return err;
  });
};

Alma.prototype.read_user_interaction_by_criteria = function(filters) {
  //formato filters = [{fieldName: "year", value: "2014"}, {fieldName: "cat", value: "sonny"}];
  let query = UserInteraction.find();

  for (let i = 0; i < filters.length; i++) {
    query.where(filters[i].fieldName).equals(filters[i].value)
  }
  let promise = query.exec();

  return promise.then( (result) => {
    return result;
  })
  .catch( (err) => {
    return err;
  });
};

Alma.prototype.read_user_interaction_by_arrayId = function(arrayId) {
  let promise = UserInteraction.find({ 'user_context_id': {$in: Array.from(arrayId)}}).exec();
  return promise.then( (result) => {
    return result;
  })
  .catch( (err) => {
    return err;
  });
};

Alma.prototype.list_all_widget_contexts = function() {
  let promise = WidgetContext.find();
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
  let content = new WidgetContext(data);
  return content.save().then(function(err) {
    if(err){
      console.log(err);
      return err;
    }
  });
};

Alma.prototype.read_widget_context = function(id) {
  let promise = WidgetContext.findById(id);
  return promise.then( (result) => {
    return result;
  })
  .catch( (err) => {
    return err;
  });
};

Alma.prototype.read_widget_context_by_criteria = function(filters) {
  //formato filters = [{fieldName: "year", value: "2014"}, {fieldName: "cat", value: "sonny"}];
  let query = WidgetContext.find();

  for (let i = 0; i < filters.length; i++) {
    query.where(filters[i].fieldName).equals(filters[i].value)
  }
  let promise = query.exec();

  return promise.then( (result) => {
    return result;
  })
  .catch( (err) => {
    return err;
  });
};

Alma.prototype.read_widget_context_by_arrayId = function(arrayId) {
  let promise = WidgetContext.find({'_id': {$in: Array.from(arrayId)}}).exec();
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
  let data = new Activity();

  data.name= activity.name;
  data.description= activity.description;
  data.laboratory_id= activity.laboratorio;
  data.questions_quantity= 1;

  data.question.order = 1;
  data.question.image = activity.respostaImg;

  console.log("\n\n*****\n"+activity);

  data.question.item.push({position:1, quantity:2, value:1, unit:'Kohm', disposition:'parallel', type:'[R]esistor'});
  data.question.item.push({position:2, quantity:2, value:1, unit:'Kohm', disposition:'parallel', type:'[R]esistor'});
  data.question.item.push({position:3, quantity:1, value:1, unit:'Kohm', disposition:'serial', type:'[R]esistor'});

  //m.ofNumber.unshift(1,2,3,4);

  data.question.supervised_reading.push({element:'r1 e r2', expected_value:5, unit:'V'});

  data.save(function(err){
    if(err){
      console.log(err);
      return err;
    }
  });
};

module.exports = Alma;
