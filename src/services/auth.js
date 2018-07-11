const jwtHelper = require('../utils/jwt');
const User = require('../models/User');
const Token = require('../models/Token');

async function login(reqBody) {
  const { email, password } = reqBody;

  const user = await User.fetchByEmail(email);

  jwtHelper.verifyPassword(password, user);

  const accessToken = jwtHelper.createAccessToken(user.id);
  const refreshToken = jwtHelper.createRefreshToken(user.id);

  await Token.set(user.id, refreshToken);

  return { accessToken, refreshToken };
}

async function reLogin(refreshToken) {
  jwtHelper.verifyRefreshToken(refreshToken);

  const idAndUserId = await Token.getIdAndUserId(refreshToken);

  const { id, userId } = idAndUserId;

  await Token.remove(id);

  const newAccessToken = jwtHelper.createAccessToken(userId);
  const newRefreshToken = jwtHelper.createRefreshToken(userId);

  await Token.set(userId, newRefreshToken);

  return { accessToken: newAccessToken, refreshToken: newRefreshToken };
}

// NOTE: logout works by removing the refresh token and not the access token
//  hence, the user will still be able to log in using access token until the
//  access token is expired
async function logout(refreshToken) {
  jwtHelper.verifyRefreshToken(refreshToken);
  const response = await Token.removeByRefreshToken(refreshToken);
  return response;
}

module.exports = {
  login,
  reLogin,
  logout,
};
