const express = require('express');
const userService = require('../services/user');

const router = express.Router();

// create new user
router.post('/', (req, res, next) => {
  userService
    .createUser(req.body)
    .then((response) => {
      res.json(response);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
