const jwtHelper = require('../utils/jwtHelper');
const User = require('../models/User');

const errMsg = 'Access token cannot be verified.';

async function authenticate(req, res, next) {
  const accessToken = req.get('Authorization');

  try {
    const userId = jwtHelper.verifyAccessToken(accessToken).data;
    const user = await User.fetchById(userId);
    req.user = user;

    next();
  } catch (err) {
    // console.log(222, err);
    next(errMsg);
  }
}

module.exports = authenticate;
