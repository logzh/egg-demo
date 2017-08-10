'use strict';

module.exports = app => {
  class HomeController extends app.Controller {
    * index() {
      const {ctx} = this; // logger
      const result = yield ctx.service.user.data();
      const data = {
        name: 'egg',
        title: '首页',
        result,
      };

      // 测试错误处理中间件
      // throw new Error('出错啦！');

      // 获取 cookie
      // logger.info(consttx.cookies.get('test', {
      //     httpOnly: false,
      //     signed: false
      // }));

      // 使用自定义helper
      // logger.info(ctx.helper.test())

      yield ctx.render('index', data);
    }

    * validate() {
      const {ctx} = this;
      try {
        ctx.validate({title: {type: 'string'}, content: {type: 'json'},}, ctx.query);
        ctx.body = {success: true}
      } catch (err) {
        ctx.logger.warn(err.errors);
        ctx.body = {success: false};
      }
    }

    * robot() {
      this.ctx.body = {success: true};
    }
  }

  return HomeController;
};
