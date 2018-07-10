function errorHandler(err, req, res, next) {
  res.status(401).json({ err });
  next(err);
}

module.exports = errorHandler;
