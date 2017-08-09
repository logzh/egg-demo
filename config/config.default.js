'use strict';

module.exports = () => {
  const config = {};

  config.keys = '12345';

  config.view = {
    mapping: {
      '.html': 'nunjucks',
    },
    defaultExtension: '.html',
  };

  config.middleware = [ 'time', 'error' ];

  return config;
};
