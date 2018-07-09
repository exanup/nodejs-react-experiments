const knex = require('../database/knex');

const TABLE_NAME = 'posts';

function fetchAll() {
  return knex(TABLE_NAME)
    .select()
    .catch((err) => {
      throw new Error(err);
    });
}

function fetch(id) {
  return knex(TABLE_NAME)
    .select()
    .where({ id })
    .limit(1)
    .then(posts => posts[0])
    .catch((err) => {
      throw new Error(err);
    });
}

function create(reqData) {
  const now = knex.fn.now();
  const dataToInsert = {
    ...reqData,
    created_at: now,
    updated_at: now,
  };
  return knex(TABLE_NAME)
    .insert(dataToInsert)
    .catch((err) => {
      throw new Error(err);
    });
}

function update(id, reqData) {
  const now = knex.fn.now();
  const dataToUpdate = {
    ...reqData,
    updated_at: now,
  };
  return knex(TABLE_NAME)
    .update(dataToUpdate)
    .where({ id })
    .catch((err) => {
      throw new Error(err);
    });
}

function remove(id) {
  return knex(TABLE_NAME)
    .del()
    .where({ id })
    .catch((err) => {
      throw new Error(err);
    });
}

module.exports = {
  fetchAll,
  fetch,
  create,
  update,
  remove,
};
