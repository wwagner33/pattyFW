'use strict';
module.exports = function(app) {
  var userContext = require('./controllers/userContextController');
  var userInteraction = require('./controllers/userInteractionController');
  var widgetContext = require('./controllers/widgetContextController');

  /*
  app.route('/activities/:activityId')
    .get(activity.read_a_activity)
    .put(activity.update_a_activity)
    .delete(activity.delete_a_activity);*/

  /*
  app.route('/laboratories/:laboratoryId')
    .get(laboratory.read_a_laboratory)
    .put(laboratory.update_a_laboratory)
    .delete(laboratory.delete_a_laboratory);*/

  app.route('/userContexts')
    .post(userContext.create_a_userContext);
  //app.route('/userContexts/:userContextId')
  //  .get(userContext.read_a_userContext);

  /*
  app.route('/users/:userId')
    .get(user.read_a_user)
    .put(user.update_a_user);
    //.authenticate(user.authenticate_a_user);*/

  app.route('/userInteractions')
    .get(userInteraction.list_all_userInteractions);
  //app.route('/userInteractions/:userInteractionId')
  //  .get(userInteraction.read_a_userInteraction);

  app.route('/widgetContexts')
    .post(widgetContext.create_a_widgetContext);
  //app.route('/widgetContexts/:widgetContextId')
  //  .get(widgetContext.read_a_widgetContext);
};
