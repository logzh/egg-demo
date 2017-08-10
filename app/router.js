'use strict';

module.exports = app => {
  const robotMiddleware = app.middlewares.robot({
    ua: [
      /Baiduspider/i,
    ]
  });

  app.get('/', 'home.index');
  app.get('/validate', 'home.validate');
  app.get('/robot', robotMiddleware, 'home.robot'); // 应用级别中间件 options 配置在config中，路由级配置在此处？
  app.get('/data', 'data.index');
};
