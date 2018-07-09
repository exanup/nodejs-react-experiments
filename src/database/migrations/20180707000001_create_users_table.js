exports.up = knex => knex.schema.createTable('users', (table) => {
  table.increments();
  table.string('email').unique();
  table.text('hash');
  table.string('fullname');
  table.timestamps(true, true);
});

exports.down = knex => knex.schema.dropTable('users');
