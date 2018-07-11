exports.up = knex => knex.schema.createTable('posts', (table) => {
  table.increments();
  table
    .string('title')
    .unique()
    .notNull();
  table.text('body').notNull();
  table
    .integer('author_id')
    .notNull()
    .references('users.id')
    .onUpdate('CASCADE')
    .onDelete('CASCADE');
  table.timestamps(true, true);
});

exports.down = knex => knex.schema.dropTable('posts');
