const express = require('express');
const authService = require('../serviceProviders/authServiceProvider');

const router = express.Router();

router.post('/', (req, res) => {
  authService
    .login(req.body)
    .then((data) => {
      console.log(22, data);
      res.json(data);
    })
    .catch((err) => {
      console.log(33, err);
      res.status(401).json(err);
    });
});

module.exports = router;
