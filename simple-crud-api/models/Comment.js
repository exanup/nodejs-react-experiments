const knex = require('../database/knex');

const TABLE_NAME = 'comments';

function fetchAll(postId) {
  return knex(TABLE_NAME)
    .select()
    .where({ post_id: postId });
}

function fetch(id) {
  return knex(TABLE_NAME)
    .select()
    .where({ id })
    .limit(1)
    .then(comments => comments[0]);
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
  fetch,
  create,
  update,
  remove,
};
