/**
 * @file Alma class
 * @author Patricia de Sousa Paula <patricia@virtual.ufc.br>
 * @author Wellington Wagner Ferreira Sarmento <wwagner@virtual.ufc.br>
 * @version 0.5.0
 * @license Apache-2.0
 */
 'use strict';
 
 const Activity = require('../models/activityModel'); 
 const Laboratory = require('../models/laboratoryModel'); 
 const UserContext = require('../models/userContextModel'); 
 const UserInteraction = require('../models/userInteractionModel'); 
 const User = require('./userModel'); 
 const WidgetContext = require('../models/widgetContextModel');

class Alma {
  constructor() {

  }
  /**
   *
   *
   * @return {*} 
   * @memberof Alma
   */
  list_all_activities() {
    let promise = Activity.find();
    return promise.then((result) => {
      return result;
    })
      .catch((err) => {
        return err;
      });
  }
/**
 *
 *
 * @param {*} data
 * @memberof Alma
 */
create_a_activity(data) {
    //Recebe no formato { name: 'nome teste2', description: 'desc teste2' }
    //pode ser lido como data.name
    let content = new Activity(data);
    content.save(function (err) {
      if (err) {
        console.log(err);
        return err;
      }
    });
  }
/**
 *
 *
 * @param {*} id
 * @return {*} 
 * @memberof Alma
 */
read_activity(id) {
    let promise = Activity.findById(id);
    return promise.then((result) => {
      return result;
    })
      .catch((err) => {
        return err;
      });
  }
  /**
   *
   *
   * @param {*} filters
   * @return {*} 
   * @memberof Alma
   */
  read_activity_by_criteria(filters) {
    let query = Activity.find();

    for (let i = 0; i < filters.length; i++) {
      query.where(filters[i].fieldName).equals(filters[i].value);
    }
    let promise = query.exec();

    return promise.then((result) => {
      return result;
    })
      .catch((err) => {
        return err;
      });
  }
  /**
   *
   *
   * @param {*} id
   * @memberof Alma
   */
  delete_a_activity(id) {
    Activity.findByIdAndRemove(id, function (err) {
      if (err) {
        console.log(err);
        return err;
      }
    });
  }
  /**
   *
   *
   * @param {*} data
   * @memberof Alma
   */
  update_a_activity(data) {
    //Recebe no formato { name: 'nome teste2', description: 'desc teste2' }
    //pode ser lido como data.name
    Activity.findByIdAndUpdate(data.id, { $set: data }, { new: true }, function (err, result) {
      if (err) {
        console.log(err);
        return err;
      }
    });
  }
  /**
   *
   *
   * @return {*} 
   * @memberof Alma
   */
  list_all_laboratories() {
    let promise = Laboratory.find();
    return promise.then((result) => {
      return result;
    })
      .catch((err) => {
        return err;
      });
  }
  /**
   *
   *
   * @param {*} data
   * @memberof Alma
   */
  create_a_laboratory(data) {
    //Recebe no formato { name: 'nome teste2', description: 'desc teste2' }
    //pode ser lido como data.name
    let content = new Laboratory(data);
    content.save(function (err) {
      if (err) {
        console.log(err);
        return err;
      }
    });
  }
  /**
   *
   *
   * @param {*} id
   * @return {*} 
   * @memberof Alma
   */
  read_laboratory(id) {
    let promise = Laboratory.findById(id);
    return promise.then((result) => {
      return result;
    })
      .catch((err) => {
        return err;
      });
  }
  /**
   *
   *
   * @param {*} filters
   * @return {*} 
   * @memberof Alma
   */
  read_laboratory_by_criteria(filters) {
    let query = Laboratory.find();

    for (let i = 0; i < filters.length; i++) {
      query.where(filters[i].fieldName).equals(filters[i].value);
    }
    let promise = query.exec();

    return promise.then((result) => {
      return result;
    })
      .catch((err) => {
        return err;
      });
  }
  /**
   *
   *
   * @param {*} id
   * @memberof Alma
   */
  delete_a_laboratory(id) {
    Laboratory.findByIdAndRemove(id, function (err) {
      if (err) {
        console.log(err);
        return err;
      }
    });
  }
  /**
   *
   *
   * @param {*} data
   * @memberof Alma
   */
  update_a_laboratory(data) {
    //Recebe no formato { name: 'nome teste2', description: 'desc teste2' }
    //pode ser lido como data.name
    Laboratory.findByIdAndUpdate(data.id, { $set: data }, { new: true }, function (err, result) {
      if (err) {
        console.log(err);
        return err;
      }
    });
  }
  /**
   *
   *
   * @return {*} 
   * @memberof Alma
   */
  list_all_user_contexts() {
    let promise = UserContext.find();
    return promise.then((result) => {
      return result;
    })
      .catch((err) => {
        return err;
      });
  }
  /**
   *
   *
   * @param {*} data
   * @return {*} 
   * @memberof Alma
   */
  create_a_user_context(data) {
    //Recebe no formato { name: 'nome teste2', description: 'desc teste2' }
    //pode ser lido como data.name
    let content = new UserContext(data);
    return content.save().then(function (err) {
      if (err) {
        console.log(err);
        return err;
      }
    });
  }
  /**
   *
   *
   * @param {*} id
   * @return {*} 
   * @memberof Alma
   */
  read_user_context(id) {
    let promise = UserContext.findById(id);
    return promise.then((result) => {
      return result;
    })
      .catch((err) => {
        return err;
      });
  }
  /**
   *
   *
   * @param {*} filters
   * @return {*} 
   * @memberof Alma
   */
  read_user_context_by_criteria(filters) {
    //formato filters = [{fieldName: "year", value: "2014"}, {fieldName: "cat", value: "sonny"}];
    let query = UserContext.find();

    for (let i = 0; i < filters.length; i++) {
      query.where(filters[i].fieldName).equals(filters[i].value);
    }
    let promise = query.exec();

    return promise.then((result) => {
      return result;
    })
      .catch((err) => {
        return err;
      });
  }
  /**
   *
   *
   * @return {*} 
   * @memberof Alma
   */
  list_all_users() {
    let promise = User.find();
    return promise.then((result) => {
      return result;
    })
      .catch((err) => {
        return err;
      });
  }
  /**
   *
   *
   * @param {*} data
   * @memberof Alma
   */
  create_a_user(data) {
    //Recebe no formato { name: 'nome teste2', description: 'desc teste2' }
    //pode ser lido como data.name
    let content = new User(data);
    content.save(function (err) {
      if (err) {
        console.log(err);
        return err;
      }
    });
  }
  /**
   *
   *
   * @param {*} id
   * @return {*} 
   * @memberof Alma
   */
  read_user(id) {
    let promise = User.findById(id);
    return promise.then((result) => {
      return result;
    })
      .catch((err) => {
        return err;
      });
  }
  /**
   *
   *
   * @param {*} filters
   * @return {*} 
   * @memberof Alma
   */
  read_user_by_criteria(filters) {
    //formato filters = [{fieldName: "year", value: "2014"}, {fieldName: "cat", value: "sonny"}];
    let query = User.find();

    for (let i = 0; i < filters.length; i++) {
      query.where(filters[i].fieldName).equals(filters[i].value);
    }
    let promise = query.exec();

    return promise.then((result) => {
      return result;
    })
      .catch((err) => {
        return err;
      });
  }
  /**
   *
   *
   * @param {*} id
   * @memberof Alma
   */
  delete_a_user(id) {
    User.findByIdAndRemove(id, function (err) {
      if (err) {
        console.log(err);
        return err;
      }
    });
  }
  /**
   *
   *
   * @param {*} data
   * @memberof Alma
   */
  update_a_user(data) {
    //Recebe no formato { name: 'nome teste2', description: 'desc teste2' }
    //pode ser lido como data.name
    User.findByIdAndUpdate(data.id, { $set: data }, { new: true }, function (err, result) {
      if (err) {
        console.log(err);
        return err;
      }
    });
  }
  /**
   *
   *
   * @param {*} login
   * @param {*} password
   * @memberof Alma
   */
  authenticate(login, password) {
    /*let promise = User.findById(id);
    return promise.then( (result) => {
      return result;
    })
    .catch( (err) => {
      return err;
    });*/
  }
  /**
   *
   *
   * @return {*} 
   * @memberof Alma
   */
  list_all_user_interactions() {
    let promise = UserInteraction.find();
    return promise.then((result) => {
      return result;
    })
      .catch((err) => {
        return err;
      });
  }
  /**
   *
   *
   * @param {*} data
   * @memberof Alma
   */
  create_a_user_interaction(data) {
    //Recebe no formato { name: 'nome teste2', description: 'desc teste2' }
    //pode ser lido como data.name
    let content = new UserInteraction(data);
    content.save(function (err) {
      if (err) {
        console.log(err);
        return err;
      }
    });
  }
  /**
   *
   *
   * @param {*} id
   * @return {*} 
   * @memberof Alma
   */
  read_user_interaction(id) {
    let promise = UserInteraction.findById(id);
    return promise.then((result) => {
      return result;
    })
      .catch((err) => {
        return err;
      });
  }
  /**
   *
   *
   * @param {*} filters
   * @return {*} 
   * @memberof Alma
   */
  read_user_interaction_by_criteria(filters) {
    //formato filters = [{fieldName: "year", value: "2014"}, {fieldName: "cat", value: "sonny"}];
    let query = UserInteraction.find();

    for (let i = 0; i < filters.length; i++) {
      query.where(filters[i].fieldName).equals(filters[i].value);
    }
    let promise = query.exec();

    return promise.then((result) => {
      return result;
    })
      .catch((err) => {
        return err;
      });
  }
  /**
   *
   *
   * @param {*} arrayId
   * @return {*} 
   * @memberof Alma
   */
  read_user_interaction_by_arrayId(arrayId) {
    let promise = UserInteraction.find({ 'user_context_id': { $in: Array.from(arrayId) } }).exec();
    return promise.then((result) => {
      return result;
    })
      .catch((err) => {
        return err;
      });
  }
  /**
   *
   *
   * @return {*} 
   * @memberof Alma
   */
  list_all_widget_contexts() {
    let promise = WidgetContext.find();
    return promise.then((result) => {
      return result;
    })
      .catch((err) => {
        return err;
      });
  }
  /**
   *
   *
   * @param {*} data
   * @return {*} 
   * @memberof Alma
   */
  create_a_widget_context(data) {
    //Recebe no formato { name: 'nome teste2', description: 'desc teste2' }
    //pode ser lido como data.name
    let content = new WidgetContext(data);
    return content.save().then(function (err) {
      if (err) {
        console.log(err);
        return err;
      }
    });
  }
  read_widget_context(id) {
    let promise = WidgetContext.findById(id);
    return promise.then((result) => {
      return result;
    })
      .catch((err) => {
        return err;
      });
  }
  read_widget_context_by_criteria(filters) {
    //formato filters = [{fieldName: "year", value: "2014"}, {fieldName: "cat", value: "sonny"}];
    let query = WidgetContext.find();

    for (let i = 0; i < filters.length; i++) {
      query.where(filters[i].fieldName).equals(filters[i].value);
    }
    let promise = query.exec();

    return promise.then((result) => {
      return result;
    })
      .catch((err) => {
        return err;
      });
  }
  read_widget_context_by_arrayId(arrayId) {
    let promise = WidgetContext.find({ '_id': { $in: Array.from(arrayId) } }).exec();
    return promise.then((result) => {
      return result;
    })
      .catch((err) => {
        return err;
      });
  }
  create_a_complete_activity(activity) {
    //Recebe no formato { name: 'nome teste2', description: 'desc teste2' }
    //pode ser lido como data.name
    let data = new Activity();

    data.name = activity.name;
    data.description = activity.description;
    data.laboratory_id = activity.laboratorio;
    data.questions_quantity = 1;

    data.question.order = 1;
    data.question.image = activity.respostaImg;

    console.log("\n\n*****\n" + activity);

    data.question.item.push({ position: 1, quantity: 2, value: 1, unit: 'Kohm', disposition: 'parallel', type: '[R]esistor' });
    data.question.item.push({ position: 2, quantity: 2, value: 1, unit: 'Kohm', disposition: 'parallel', type: '[R]esistor' });
    data.question.item.push({ position: 3, quantity: 1, value: 1, unit: 'Kohm', disposition: 'serial', type: '[R]esistor' });

    //m.ofNumber.unshift(1,2,3,4);
    data.question.supervised_reading.push({ element: 'r1 e r2', expected_value: 5, unit: 'V' });

    data.save(function (err) {
      if (err) {
        console.log(err);
        return err;
      }
    });
  }
};

module.exports = Alma;