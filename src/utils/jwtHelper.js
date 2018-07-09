const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

function verifyPassword(password, user) {
  return bcrypt.compareSync(password, user.hash);
}

function createNewRefreshToken(data) {
  return jwt.sign({ data }, process.env.SECRET, {
    expiresIn: 60 * 60 * 24 * 30,
  });
}

function createNewAccessToken(data) {
  return jwt.sign({ data }, process.env.SECRET, { expiresIn: 60 * 1 });
}

module.exports = {
  verifyPassword,
  createNewAccessToken,
  createNewRefreshToken,
};
