const User = require('../models/User');
const jwtHelper = require('../utils/jwt');

function getAllUsers() {
  return User.fetchAll();
}

function getUserById(id) {
  return User.fetchById(id);
}

function getUserByEmail(email) {
  return User.fetchById(email);
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
