exports.up = knex => knex.schema.createTable('comments', (table) => {
  table.increments();
  table.text('body');
  table
    .integer('post_id')
    .references('posts.id')
    .onDelete('CASCADE')
    .onUpdate('CASCADE');
  table.string('author');
  table.timestamps();
});

exports.down = knex => knex.schema.dropTable('comments');
