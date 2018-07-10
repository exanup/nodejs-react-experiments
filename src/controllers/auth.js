const express = require('express');
const authService = require('../services/auth');
// const { authenticate } = require('../middlewares/auth');

const router = express.Router();

router.post('/login', (req, res) => {
  authService
    .login(req.body)
    .then((data) => {
      // console.log(22, data);
      res.json(data);
    })
    .catch(() => {
      // console.log(401, err);
      res.status(401).json({ msg: 'not authorized' });
    });
});

router.post('/refresh', (req, res) => {
  authService
    .reLogin(req.body.refreshToken)
    .then((data) => {
      // console.log(22, data);
      res.json(data);
    })
    .catch(() => {
      // console.log(401, err);
      res.status(401).json({ msg: 'not authorized' });
    });
});

router.post('/logout', (req, res) => {
  authService
    .logout(req.body.accessToken)
    .then(() => {
      res.json({ msg: 'Logged Out' });
    })
    .catch(() => {
      // console.log(err);
      res.status(401).json({ msg: 'not authorized' });
    });
});

module.exports = router;
