'use strict';
module.exports = function(app) {
  var Alma = require('./class/Alma')
  var alma = new Alma();

  app.get('/list_activities', function(req, res) {
    var result = alma.list_all_activities();
    result.then( function(doc) {
      res.render('pages/list_activities',
        { 'data': doc }
      );
    })
    .catch( (err) => {
      console.log(err);
    });
  });

  app.get('/new_activity', function(req, res) {
    res.render('pages/new_activity');
  });

  app.post('/create_a_activity', function(req, res) {
    var erro = alma.create_a_activity(req.body || {});
    res.render('pages/list_activities', {'err': erro});
  });

}
