const faker = require('faker');
const { usersMax, postsMax, commentsMax } = require('./seedConfig.json');

exports.seed = knex => knex('comments')
  .del()
  .then(() => {
    const comments = [];
    for (let i = 0; i < commentsMax; i += 1) {
      // Below is our attempt to generate a random post_id.
      //  But the problem is that we are here assuming that
      //  the table was freshly created and hence the id's
      //  of posts start from 1 and goes up to the maximum
      //  created by the post's seed ie. value of postsMax.

      // TODO: generate random postId which actually IS in
      //  the posts table
      const rndPostId = Math.floor(Math.random() * postsMax) + 1;
      const rndUserId = Math.floor(Math.random() * usersMax) + 1;
      const comment = {
        body: faker.lorem.paragraph(2),
        post_id: rndPostId,
        author_id: rndUserId,
      };
      comments.push(comment);
    }

    return knex('comments').insert(comments);
  });
