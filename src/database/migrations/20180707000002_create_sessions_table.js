exports.up = knex => knex.schema.createTable('sessions', (table) => {
  table.increments();
  table.string('refresh_token').unique();
  table
    .integer('user_id')
    .references('users.id')
    .onDelete('CASCADE')
    .onUpdate('CASCADE');
  table.timestamps(true, true);
});

exports.down = knex => knex.schema.dropTable('sessions');
