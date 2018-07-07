const knex = require('../database/knex');

const TABLE_NAME = 'comments';

function fetchCommentsFromPost(postId) {
  return knex(TABLE_NAME)
    .select()
    .where({ post_id: postId });
}

function fetch(id) {
  return knex(TABLE_NAME)
    .select()
    .where({ id });
}

function create(reqData) {
  return knex(TABLE_NAME).insert(reqData);
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
  fetchCommentsFromPost,
  fetch,
  create,
  update,
  remove,
};
