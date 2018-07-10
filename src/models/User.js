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
    .then(users => users[0]);
}

function fetchByEmail(email) {
  return knex(TABLE_NAME)
    .select()
    .where({ email })
    .limit(1)
    .then(users => users[0]);
}

function create(reqData) {
  const now = knex.fn.now();
  const dataToInsert = {
    ...reqData,
    created_at: now,
    updated_at: now,
  };
  return knex(TABLE_NAME).insert(dataToInsert);
}

function update(id, reqData) {
  const now = knex.fn.now();
  const dataToUpdate = {
    ...reqData,
    updated_at: now,
  };
  return knex(TABLE_NAME)
    .update(dataToUpdate)
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
