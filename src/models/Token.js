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
  return knex(TABLE_NAME)
    .del()
    .where({ id: tokenId });
}

function removeByRefreshToken(refreshToken) {
  return knex(TABLE_NAME)
    .del()
    .where({ refresh_token: refreshToken });
}

module.exports = {
  set,
  getIdAndUserId,
  remove,
  removeByRefreshToken,
};
