const faker = require('faker');
const seedConfig = require('./seedConfig.json');

exports.seed = knex => knex('comments')
  .del()
  .then(() => {
    const { postsMax, commentsMax } = seedConfig;

    const comments = [];
    for (let i = 0; i < commentsMax; i += 1) {
      const rndPostId = Math.floor(Math.random() * postsMax) + 1;
      const comment = {
        body: faker.lorem.paragraph(),
        post_id: rndPostId,
        author: `${faker.name.firstName()} ${faker.name.lastName()}`,
        created_at: knex.fn.now(),
        updated_at: knex.fn.now(),
      };
      comments.push(comment);
    }

    return knex('comments').insert(comments);
  });
