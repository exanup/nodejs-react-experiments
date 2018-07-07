const Knex = require('knex');
const knexConfig = require('./knexConfig');

const knex = Knex(knexConfig);

module.exports = knex;
