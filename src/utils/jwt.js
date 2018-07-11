const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const saltRounds = parseInt(process.env.SALT_ROUNDS, 10);

function verifyPassword(password, user) {
  return bcrypt.compare(password, user.hash);
}

function getHash(password) {
  return bcrypt.hash(password, saltRounds);
}

function createAccessToken(data) {
  return jwt.sign({ data }, process.env.ACCESS_SECRET, { expiresIn: 60 * 30 });
}

function createRefreshToken(data) {
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
  getHash,
  createAccessToken,
  createRefreshToken,
  verifyAccessToken,
  verifyRefreshToken,
};
