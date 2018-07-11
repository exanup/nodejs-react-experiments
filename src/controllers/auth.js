const express = require('express');
const Boom = require('boom');

const authService = require('../services/auth');

const router = express.Router();
const { generalErrMsg } = require('../consts/errorMessages');

router.post('/login', async (req, res, next) => {
  try {
    const response = await authService.login(req.body);
    res.json(response);
  } catch (err) {
    next(Boom.unauthorized(generalErrMsg.WRONG_CREDENTIALS));
  }
});

router.post('/refresh', async (req, res, next) => {
  try {
    const response = await authService.reLogin(req.body.refreshToken);
    res.json(response);
  } catch (err) {
    next(Boom.badRequest(generalErrMsg.BAD_TOKEN));
  }
});

router.post('/logout', async (req, res, next) => {
  try {
    const response = await authService.logout(req.body.refreshToken);
    res.json(response);
  } catch (err) {
    next(Boom.badRequest(generalErrMsg.BAD_TOKEN));
  }
});

module.exports = router;
