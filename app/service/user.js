'use strict';

module.exports = app => {
  class User extends app.Service {
    * find() {
      const result = yield app.curl('https://registry.npm.taobao.org/egg/latest', {
        dataType: 'json',
      });
      return result;

      // const user = yield this.ctx.db.query(`select * from user where uid = ${uid}`);
      // const user = {id: uid, name:`${uid}-name`};
      // return user;
    }

    * data() {
      const result = yield app.curl('https://registry.npm.taobao.org/egg/latest', {
        dataType: 'json',
      });
      return result;
    }
  }

  return User;
};
