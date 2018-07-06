const knex = require('../database/knex');

const TABLE_NAME = 'posts';

function fetchAll() {
  return knex(TABLE_NAME)
    .select();
}

function fetch(id) {
  return knex(TABLE_NAME)
    .select()
    .where({ id });
}

function create(reqData) {
  return knex(TABLE_NAME)
    .insert(reqData);
}

function update(id, reqData) {
  return knex(TABLE_NAME)
    .update(reqData)
    .where({ id });
}

function remove(id) {
  return knex(TABLE_NAME)
    .del()
    .where({ id });
}

module.exports = {
  fetchAll,
  fetch,
  create,
  update,
  remove,
};
