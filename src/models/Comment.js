const knex = require('../database/knex');

const TABLE_NAME = 'comments';

function fetchAll(postId) {
  return knex(TABLE_NAME)
    .select()
    .where({ post_id: postId });
}

function fetch(id, postId) {
  return knex(TABLE_NAME)
    .select()
    .where({ id, post_id: postId })
    .limit(1)
    .then(([comment]) => comment);
}

function create(reqData, authorId) {
  const { body, postId } = reqData;
  return knex(TABLE_NAME).insert({ body, post_id: postId, author_id: authorId });
}

function update(id, reqData, authorId) {
  const { body } = reqData;
  return knex(TABLE_NAME)
    .update({ body })
    .where({ id, author_id: authorId });
}

function remove(id, authorId) {
  return knex(TABLE_NAME)
    .del()
    .where({ id, author_id: authorId });
}

module.exports = {
  fetchAll,
  fetch,
  create,
  update,
  remove,
};
