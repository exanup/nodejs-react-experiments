const express = require('express');
const authService = require('../services/auth');

const router = express.Router();

router.post('/', (req, res) => {
  authService
    .login(req.body)
    .then((data) => {
      // console.log(22, data);
      res.json(data);
    })
    .catch((err) => {
      console.log(401, err);
      res.status(401).json({ msg: 'not authorized' });
    });
});

router.post('/refresh/', (req, res) => {
  authService
    .reLogin(req.body.refreshToken)
    .then((data) => {
      // console.log(22, data);
      res.json(data);
    })
    .catch((err) => {
      console.log(401, err);
      res.status(401).json({ msg: 'not authorized' });
    });
});

module.exports = router;
