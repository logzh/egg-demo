'use strict';

module.exports = () => {

  return {
    keys: 'spence',
    view: {
      mapping: {
        '.html': 'nunjucks',
      },
      defaultExtension: '.html',
    },
    middleware: [ 'time' ], // error
    robot: {
      ua: [
        /Baiduspider/i,
      ],
    },
    security: {
      domainWhiteList: [ 'xx.com', 'xxx.com' ],
    },
    helper: {
      shtml: {
        whiteList: {
          span: [ 'class', 'style' ],
        },
        css: {
          whiteList: {
            'font-size': true,
          },
        },
      },
    },
  };
};
