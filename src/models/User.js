const knex = require('../database/knex');

const TABLE_NAME = 'users';

function fetchAll() {
  return knex(TABLE_NAME).select();
}

function fetchById(id) {
  return knex(TABLE_NAME)
    .select()
    .where({ id })
    .limit(1)
    .then(([user]) => user);
}

function fetchByEmail(email) {
  return knex(TABLE_NAME)
    .select()
    .where({ email })
    .limit(1)
    .then(([user]) => user);
}

function create(reqData, hash) {
  const { email, firstName, lastName } = reqData;
  return knex(TABLE_NAME)
    .insert({
      email,
      hash,
      first_name: firstName,
      last_name: lastName,
    })
    .returning('*')
    .then(([user]) => user);
}

function update(id, reqData, hash) {
  const { firstName, lastName } = reqData;
  return knex(TABLE_NAME)
    .update({ hash, first_name: firstName, last_name: lastName })
    .where({ id });
}

function remove(id) {
  return knex(TABLE_NAME)
    .del()
    .where({ id });
}

module.exports = {
  fetchAll,
  fetchById,
  fetchByEmail,
  create,
  update,
  remove,
};
