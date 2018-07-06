const knex = require('../database/knex');

const TABLE_NAME = 'posts';

const post = {
  fetchAll() {
    return knex(TABLE_NAME)
      .select('*');
  },

  fetch(id) {
    return knex(TABLE_NAME)
      .select('*')
      .where('id', id);
  },

  create(reqData) {
    return knex(TABLE_NAME)
      .insert(reqData);
  },

  update(id, reqData) {
    return knex(TABLE_NAME)
      .update(reqData)
      .where('id', id);
  },

  delete(id) {
    return knex(TABLE_NAME)
      .del()
      .where('id', id);
  },
};

// const post = new Post();

module.exports = post;
