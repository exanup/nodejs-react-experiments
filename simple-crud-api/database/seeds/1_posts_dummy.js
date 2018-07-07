const faker = require('faker');
const seedConfig = require('./seedConfig.json');

exports.seed = knex => knex('posts')
  .del()
  .then(() => {
    const { postsMax } = seedConfig;

    const posts = [];
    for (let i = 0; i < postsMax; i += 1) {
      const post = {
        title: faker.lorem.sentence(5),
        body: faker.lorem.paragraph(1),
        author: `${faker.name.firstName()} ${faker.name.lastName()}`,
        created_at: knex.fn.now(),
        updated_at: knex.fn.now(),
      };
      posts.push(post);
    }

    return knex('posts').insert(posts);
  });
