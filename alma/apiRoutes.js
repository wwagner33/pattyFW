'use strict';
module.exports = function(app) {
  var userContext = require('./controllers/userContextController');
  var userInteraction = require('./controllers/userInteractionController');
  var widgetContext = require('./controllers/widgetContextController');

  app.route('/userContexts')
    .post(userContext.create_a_userContext);

  app.route('/userInteractions')
    .get(userInteraction.list_all_userInteractions);

  app.route('/widgetContexts')
    .post(widgetContext.create_a_widgetContext);
};
