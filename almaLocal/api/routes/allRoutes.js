'use strict';
module.exports = function(app) {
  var activity = require('../controllers/activityController');
  var laboratory = require('../controllers/laboratoryController');
  var userContext = require('../controllers/userContextController');
  var user = require('../controllers/userController');
  var userInteraction = require('../controllers/userInteractionController');
  var widgetContext = require('../controllers/widgetContextController');

  app.route('/activities')
    .get(activity.list_all_activities)
    .post(activity.create_a_activity);
  app.route('/activities/:activityId')
    .get(activity.read_a_activity)
    .put(activity.update_a_activity)
    .delete(activity.delete_a_activity);

  app.route('/laboratories')
    .get(laboratory.list_all_laboratories)
    .post(laboratory.create_a_laboratory);
  app.route('/laboratories/:laboratoryId')
    .get(laboratory.read_a_laboratory)
    .put(laboratory.update_a_laboratory)
    .delete(laboratory.delete_a_laboratory);

  app.route('/userContexts')
    .get(userContext.list_all_userContexts)
    .post(userContext.create_a_userContext);
  app.route('/userContexts/:userContextId')
    .get(userContext.read_a_userContext);

  app.route('/users')
    .get(user.list_all_users)
    .post(user.create_a_user);
  app.route('/users/:userId')
    .get(user.read_a_user)
    .put(user.update_a_user);
    //.authenticate(user.authenticate_a_user);
  app.route('/userInteractions')
    .get(userInteraction.list_all_userInteractions)
    .post(userInteraction.create_a_userInteraction);
  app.route('/userInteractions/:userInteractionId')
    .get(userInteraction.read_a_userInteraction);

  app.route('/widgetContexts')
    .get(widgetContext.list_all_widgetContexts)
    .post(widgetContext.create_a_widgetContext);
  app.route('/widgetContexts/:widgetContextId')
    .get(widgetContext.read_a_widgetContext);
};
