const kenxConfig = require('./knex-config');

const knex = require('knex')(kenxConfig);

module.exports = knex;
