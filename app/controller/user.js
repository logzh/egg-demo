'use strict';

module.exports = app => {
  class UserController extends app.Controller {
    * info() {
      const {ctx} = this;
      const result = yield ctx.service.user.find(ctx.params.id);
      ctx.body = result;
    }

    * list() {
      const {ctx} = this;
      // parallel GET detail, see `yield {}` from co
      const result = yield [1, 2, 3, 4, 5].map(id => {
        return ctx.service.user.find(id);
      });

      ctx.body = result;
    }

    * list2() {
      const {ctx} = this;
      let result = [];
      const result1 = yield ctx.service.user.find(6);
      result = [...result, result1];
      const result2 = yield ctx.service.user.find(7);
      result = [...result, result2];
      const result3 = yield ctx.service.user.find(8);
      result = [...result, result3];
      const result4 = yield ctx.service.user.find(9);
      result = [...result, result4];
      const result5 = yield ctx.service.user.find(10);
      result = [...result, result5];
      ctx.body = result;
    }
  }

  return UserController;
};
