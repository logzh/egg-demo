module.exports = () => {
  return function* (next) {
    const start = Date.now();
    yield next;
    this.logger.info(Date.now() - start);
  };
};
