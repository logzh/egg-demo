module.exports = () => {
  return function* (next) {
    try {
      yield* next;
    } catch (e) {
      let status = e.status || 500;
      let message = e.message || '服务器错误';

      // this.app.emit('error', e, this);

      // if (e instanceof JsonError) { // 错误是 json 错误
      //   this.body = {
      //     'status': status,
      //     'message': message
      //   };
      //   if (status === 500) {
      //     // 触发 koa 统一错误事件，可以打印出详细的错误堆栈 log
      //     this.app.emit('error', e, this);
      //   }
      //   return;
      // }

      // this.status = status;
      // // 根据 status 渲染不同的页面
      // if (status === 403) {
      //   this.body = yield this.render('403.html', {'err': e});
      // }
      // if (status === 404) {
      //   this.body = yield this.render('404.html', {'err': e});
      // }
      // if (status === 500) {
      //   this.body = yield this.render('500.html', {'err': e});
      //   // 触发 koa 统一错误事件，可以打印出详细的错误堆栈 log
      //   this.app.emit('error', e, this);
      // }
    }
  }
};

