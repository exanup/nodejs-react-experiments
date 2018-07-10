exports.up = knex => knex.schema.createTable('posts', (table) => {
  table.increments();
  table.string('title').unique();
  table.text('body');
  table
    .integer('author_id')
    .references('users.id')
    .onUpdate('CASCADE')
    .onDelete('CASCADE');
  table.timestamps(true, true);
});

exports.down = knex => knex.schema.dropTable('posts');
