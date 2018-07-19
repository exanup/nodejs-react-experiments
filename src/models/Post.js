const knex = require('../database/knex');

const TABLE_NAME = 'posts';
// const COMMENT_TABLE = 'comments';

function fetchAll(userId) {
  const condition = typeof userId !== 'undefined' ? { author_id: userId } : {};

  return knex(TABLE_NAME)
    .select()
    .where(condition)
    .orderBy('updated_at', 'desc');
}

function fetch(id, userId) {
  const condition = typeof userId !== 'undefined' ? { id, author_id: userId } : { id };

  return knex(TABLE_NAME)
    .select()
    .where(condition)
    .limit(1)
    .then(([post]) => post);
}

function create(reqData, userId) {
  const { title, body } = reqData;
  return knex(TABLE_NAME)
    .insert({ title, body, author_id: userId })
    .returning('*')
    .then(([post]) => post);
}

function update(id, reqData, userId) {
  const { title, body } = reqData;
  return knex(TABLE_NAME)
    .update({ title, body })
    .where({ id, author_id: userId });
}

function remove(id, userId) {
  return knex(TABLE_NAME)
    .del()
    .where({ id, author_id: userId });
}

module.exports = {
  fetchAll,
  fetch,
  create,
  update,
  remove,
};
