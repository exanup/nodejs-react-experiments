const faker = require('faker');
const { postsMax } = require('./seedConfig.json');

exports.seed = knex => knex('posts')
  .del()
  .then(() => {
    const posts = [];
    for (let i = 0; i < postsMax; i += 1) {
      const now = knex.fn.now();
      const post = {
        title: faker.lorem.sentence(5),
        body: faker.lorem.paragraph(1),
        author: `${faker.name.firstName()} ${faker.name.lastName()}`,
        created_at: now,
        updated_at: now,
      };
      posts.push(post);
    }

    return knex('posts').insert(posts);
  });
