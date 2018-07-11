exports.up = knex => knex.schema.createTable('users', (table) => {
  table.increments();
  table
    .string('email')
    .unique()
    .notNull();
  table.text('hash').notNull();
  table.string('first_name').notNull();
  table.string('last_name').notNull();
  table.timestamps(true, true);
});

exports.down = knex => knex.schema.dropTable('users');
