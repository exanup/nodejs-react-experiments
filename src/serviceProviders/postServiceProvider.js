const Post = require('../models/Post');
const Comment = require('../models/Comment');

// As a noob in Javascript, I took the challenge of not using async/await
//  and still managed to achieve the following while still maintaining
//  the cleanliness and readability of the code. :)
function getPostsWithComments(posts) {
  return Promise.all(
    posts.map(post => Comment.fetchAll(post.id).then(comments => ({
      ...post,
      comments,
    }))),
  );
}

function getPostWithComments(id, post) {
  return Comment.fetchAll(id).then(comment => ({ ...post, comment }));
}

function getAllPosts() {
  return Post.fetchAll()
    .then(posts => getPostsWithComments(posts))
    .catch((error) => {
      throw Error(`${error}. ${error.hint ? error.hint : ''}`);
    });
}

function getPost(id) {
  return Post.fetch(id)
    .then(post => getPostWithComments(id, post))
    .catch((error) => {
      throw Error(`${error}. ${error.hint ? error.hint : ''}`);
    });
}

function createPost(reqData) {
  return Post.create(reqData).catch((error) => {
    throw Error(`${error}. ${error.hint ? error.hint : ''}`);
  });
}

function updatePost(id, reqData) {
  return Post.update(id, reqData).catch((error) => {
    throw Error(`${error}. ${error.hint ? error.hint : ''}`);
  });
}

function deletePost(id) {
  return Post.remove(id).catch((error) => {
    throw Error(`${error}. ${error.hint ? error.hint : ''}`);
  });
}

module.exports = {
  getAllPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
};
