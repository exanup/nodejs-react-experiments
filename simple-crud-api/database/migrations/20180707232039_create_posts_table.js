exports.up = knex => knex.schema.createTable('posts', (table) => {
  table.increments();
  table.string('title').unique();
  table.text('body');
  table.string('author');
  table.timestamps();
});

exports.down = knex => knex.schema.dropTable('posts');
