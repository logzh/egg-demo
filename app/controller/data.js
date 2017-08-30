'use strict';

module.exports = app => {
  class DataController extends app.Controller {
    * index() {
      // this.ctx.body = {
      //     name: 'egg',
      //     category: 'framework',
      //     language: 'Node.js',
      // };

      const result = yield app.axios({
        url: 'https://registry.npm.taobao.org/egg/latest',
      });

      this.ctx.body = result.data;
    }
  }

  return DataController;
};
