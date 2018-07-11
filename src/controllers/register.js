const express = require('express');
const Boom = require('boom');

const userService = require('../services/user');

const router = express.Router();

// create new user
router.post('/', async (req, res, next) => {
  try {
    const response = await userService.createUser(req.body);
    req.json(response);
  } catch (err) {
    next(Boom.badRequest());
  }
});

module.exports = router;
