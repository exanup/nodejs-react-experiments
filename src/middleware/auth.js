const Boom = require('boom');

const jwtHelper = require('../utils/jwt');
const User = require('../models/User');

/**
 * Authenticate the user. If successful, add a prop user to the req
 * object. If unsuccessful, and if soft is true and token is not
 * provided, still go on with it. Otherwise, return the error.
 *
 * @param {*} [{ soft = false }={}]
 */

const authenticate = ({ soft = false } = {}) => async (req, res, next) => {
  if (typeof req.user !== 'undefined') {
    console.log('User is already logged ');
    next();
  }

  try {
    const accessToken = req.get('Authorization');
    const userId = jwtHelper.verifyAccessToken(accessToken).data;
    const user = await User.fetchById(userId);
    req.user = user;
    next();
  } catch (err) {
    if (soft && err.name === 'JsonWebTokenError' && err.message === 'jwt must be provided') {
      console.log('JWT not provided, but going on with it...');
      next();
    } else {
      console.log('Hard authenticate failed. Valid JWT must be provided!');
      console.log(err);
      next(Boom.unauthorized(err));
    }
  }
};

module.exports = authenticate;
