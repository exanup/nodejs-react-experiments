const Knex = require('knex');
const kenxConfig = require('./knex-config-file');

const knex = Knex(kenxConfig);

module.exports = knex;
