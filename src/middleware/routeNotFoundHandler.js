const express = require('express');
const Boom = require('boom');

const router = express.Router();

router.all('*', (req, res, next) => {
  const err = Boom.notFound();
  res.status(err.output.statusCode).json(err.output.payload);
  next(err);
});

module.exports = router;
