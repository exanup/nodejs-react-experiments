const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/User');

async function login(reqBody) {
  const { email, password } = reqBody;
  const user = await User.fetchByEmail(email);
  const isPasswordCorrect = await bcrypt.compare(password, user.hash);
  if (isPasswordCorrect) {
    const accessToken = jwt.sign({ data: user }, process.env.SECRET, { expiresIn: 60 * 1 });
    const refreshToken = jwt.sign({ data: user }, process.env.SECRET, {
      expiresIn: 60 * 60 * 24 * 30,
    });
    // TODO insert refreshToken in the table
    return { accessToken, refreshToken };
  }
  // console.log('na');
  throw new Error({ msg: 'Email or password did not match!' });
}

module.exports = {
  login,
};
