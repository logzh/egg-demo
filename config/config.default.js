'use strict';

module.exports = () => {

  return {
    keys: 'spence',
    view: {
      mapping: {
        '.html': 'nunjucks',
      },
      defaultExtension: '.html'
    },
    middleware: ['time', 'error', 'robot'],
    robot: {
      ua: [
        /Baiduspider/i,
      ]
    }
  };
};
