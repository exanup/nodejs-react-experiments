const Boom = require('boom');

const jwtHelper = require('../utils/jwt');
const User = require('../models/User');

async function authenticate(req, res, next) {
  // for now let's make it such that a user is automatically logged in
  // const userIdToLogin = 1;
  // const user = await User.fetchById(userIdToLogin);
  // req.user = user;
  // next();

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
