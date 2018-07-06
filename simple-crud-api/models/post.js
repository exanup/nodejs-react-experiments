const knex = require('../database/db');

const SCHEMA_NAME = 'my-blog';
const TABLE_NAME = 'posts';

const db = knex(TABLE_NAME).withSchema(SCHEMA_NAME);

class Post {
  constructor() {
  }

  fetchAll() {
    return db
      .select('*')
  }

  fetch(id) {
    return db
      .select('*')
      .where('id', id);
  }

  create(reqData) {
    return db
      .insert(reqData)
  }

  update(id, reqData) {
    return db
      .update(reqData)
      .where('id', id);
  }

  delete(id) {
    return db
      .del()
      .where('id', id);
  }

}

post = new Post();

module.exports = post;
