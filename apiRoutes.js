'use strict';
module.exports = function(app) {
  let userContext = require('./controllers/userContextController');
  let userInteraction = require('./controllers/userInteractionController');
  let widgetContext = require('./controllers/widgetContextController');

  app.route('/userContexts')
    .post(userContext.create_a_userContext);

  app.route('/userInteractions')
    .get(userInteraction.list_all_userInteractions);

  app.route('/widgetContexts')
    .post(widgetContext.create_a_widgetContext);
};
