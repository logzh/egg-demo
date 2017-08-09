'use strict';

module.exports = app => {
  app.get('/', 'home.index');
  app.get('/validate', 'home.validate');
  app.get('/data', 'data.index');
};
