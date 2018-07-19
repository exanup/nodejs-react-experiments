function errorHandler(err, req, res, next) {
  res.status(err.output.statusCode).json(err.output.payload);
  res.end();
  next(err);
}

module.exports = errorHandler;
