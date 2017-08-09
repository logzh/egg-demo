'use strict';

module.exports = app => {
  class DataController extends app.Controller {
    * index() {
      // this.ctx.body = {
      //     name: 'egg',
      //     category: 'framework',
      //     language: 'Node.js',
      // };

      const result = yield app.curl('https://registry.npm.taobao.org/egg/latest', {
        dataType: 'json',
      });

      this.ctx.body = result;
    }
  }

  return DataController;
};
