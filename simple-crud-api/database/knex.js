const Knex = require('knex');
const kenxConfig = require('./knex-config');

const knex = Knex(kenxConfig);

module.exports = knex;
