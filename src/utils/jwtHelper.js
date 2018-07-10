const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

function verifyPassword(password, user) {
  return bcrypt.compareSync(password, user.hash);
}

function createNewAccessToken(data) {
  return jwt.sign({ data }, process.env.ACCESS_SECRET, { expiresIn: 60 * 30 });
}

function createNewRefreshToken(data) {
  return jwt.sign({ data }, process.env.REFRESH_SECRET, {
    expiresIn: 60 * 60 * 24 * 30,
  });
}

function verifyAccessToken(accessToken) {
  return jwt.verify(accessToken, process.env.ACCESS_SECRET);
}

function verifyRefreshToken(refreshToken) {
  return jwt.verify(refreshToken, process.env.REFRESH_SECRET);
}

module.exports = {
  verifyPassword,
  createNewAccessToken,
  createNewRefreshToken,
  verifyAccessToken,
  verifyRefreshToken,
};
