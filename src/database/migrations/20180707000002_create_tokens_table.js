exports.up = knex => knex.schema.createTable('tokens', (table) => {
  table.increments();
  table.text('refresh_token').unique().notNull();
  table
    .integer('user_id')
    .references('users.id')
    .onDelete('CASCADE')
    .onUpdate('CASCADE');
  table.timestamps(true, true);
});

exports.down = knex => knex.schema.dropTable('tokens');
