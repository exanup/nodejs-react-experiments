const jwtHelper = require('../utils/jwtHelper');
const User = require('../models/User');
const Token = require('../models/Token');

const errMsg = 'Email or password did not match!';

async function login(reqBody) {
  const { email, password } = reqBody;

  const user = await User.fetchByEmail(email);
  if (typeof user === 'undefined') throw new Error(errMsg);

  if (!jwtHelper.verifyPassword(password, user)) throw new Error(errMsg);

  const accessToken = jwtHelper.createNewAccessToken(user.id);
  const refreshToken = jwtHelper.createNewRefreshToken(user.id);

  const tokenId = await Token.set(user.id, refreshToken);
  if (!tokenId) throw new Error('Cannot set token for some reason!');

  return { accessToken, refreshToken };
}

async function reLogin(refreshToken) {
  if (!jwtHelper.verifyRefreshToken(refreshToken)) throw new Error('Token cannot be verified!');

  const idAndUserId = await Token.getIdAndUserId(refreshToken);
  if (typeof idAndUserId === 'undefined') throw new Error('Token not found');

  const { id, userId } = idAndUserId;

  const tokenRemoved = await Token.remove(id);
  if (!tokenRemoved) throw new Error('Token cannot be removed');

  const newAccessToken = jwtHelper.createNewAccessToken(userId);
  const newRefreshToken = jwtHelper.createNewRefreshToken(userId);

  const tokenId = await Token.set(userId, newRefreshToken);
  if (!tokenId) throw new Error('Cannot set token for some reason!');

  return { accessToken: newAccessToken, refreshToken: newRefreshToken };
}

// TODO make logout work
async function logout(accessToken) {
  return accessToken;
}

module.exports = {
  login,
  reLogin,
  logout,
};
