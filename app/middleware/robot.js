'use strict';

module.exports = (options, app) => {
  return function* robotMiddleware(next) {

    const source = this.get('user-agent') || '';
    const match = options.ua.some(ua => ua.test(source));
    if (match) {
      this.status = 403;
      this.message = app.name;
    } else {
      yield next;
    }
  };
};
