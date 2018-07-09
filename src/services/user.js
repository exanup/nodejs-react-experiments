const bcrypt = require('bcrypt');

const User = require('../models/User');

const saltRounds = parseInt(process.env.SALT_ROUNDS, 10);

function getAllUsers() {
  return User.fetchAll();
}

function getUserById(id) {
  return User.fetchById(id);
}

function getUserByEmail(email) {
  return User.fetchById(email);
}

async function createUser(user) {
  const { email, password, fullname } = user;
  const hash = await bcrypt.hash(password, saltRounds);
  const newUser = { email, hash, fullname };

  return User.create(newUser);
}

function updateUser(id, updatedUser) {
  return User.update(id, updatedUser);
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
