const User = require('../models/User');
const jwtHelper = require('../utils/jwt');
const { withPrettyDateTime } = require('../utils/date');

async function getAllUsers() {
  return (await User.fetchAll()).map(user => withPrettyDateTime(user));
}

async function getUserById(id) {
  return withPrettyDateTime(await User.fetchById(id));
}

async function getUserByEmail(email) {
  return withPrettyDateTime(await User.fetchByEmail(email));
}

async function createUser(reqBody) {
  const { password } = reqBody;
  const hash = await jwtHelper.getHash(password);
  return User.create(reqBody, hash);
}

async function updateUser(id, reqBody) {
  const { password } = reqBody;
  const hash = await jwtHelper.getHash(password);
  return User.update(id, reqBody, hash);
}

function deleteUser(id) {
  return User.remove(id);
}

module.exports = {
  getAllUsers,
  getUserById,
  getUserByEmail,
  createUser,
  updateUser,
  deleteUser,
};
