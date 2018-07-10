exports.up = knex => knex.schema.createTable('comments', (table) => {
  table.increments();
  table.text('body');
  table
    .integer('post_id')
    .references('posts.id')
    .onDelete('CASCADE')
    .onUpdate('CASCADE');
  table
    .integer('author_id')
    .references('users.id')
    .onDelete('CASCADE')
    .onUpdate('CASCADE');
  table.timestamps(true, true);
});

exports.down = knex => knex.schema.dropTable('comments');
