const Boom = require('boom');

const jwtHelper = require('../utils/jwt');
const User = require('../models/User');

async function authenticate(req, res, next) {
  const accessToken = req.get('Authorization');

  try {
    const userId = jwtHelper.verifyAccessToken(accessToken).data;
    const user = await User.fetchById(userId);
    req.user = user;

    next();
  } catch (err) {
    next(Boom.unauthorized());
  }
}

module.exports = authenticate;
