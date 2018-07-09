const knex = require('../database/knex');

const TABLE_NAME = 'tokens';

function set(userId, token) {
  return knex(TABLE_NAME)
    .insert({
      refresh_token: token,
      user_id: userId,
    })
    .returning('id');
}

function getIdAndUserId(token) {
  return knex(TABLE_NAME)
    .select()
    .column('id', { userId: 'user_id' })
    .where({ refresh_token: token })
    .then(data => data[0]);
}

function remove(tokenId) {
  console.log('Token to be deleted: ', tokenId);
  return knex(TABLE_NAME)
    .del()
    .where({ id: tokenId });
}

module.exports = {
  set,
  getIdAndUserId,
  remove,
};
