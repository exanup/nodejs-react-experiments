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

function getAllPosts() {
  return Post.fetchAll()
    .then(posts => getPostsWithComments(posts))
    .catch((error) => {
      throw Error(error);
    });
}

function getPost(id) {
  return Post.fetch(id)
    .then(post => Comment.fetchAll(id).then(comment => ({ ...post, comment })))
    .catch((error) => {
      throw Error(error);
    });
}

function createPost(reqData) {
  return Post.create(reqData).catch((error) => {
    throw Error(error);
  });
}

function updatePost(id, reqData) {
  return Post.update(id, reqData).catch((error) => {
    throw Error(error);
  });
}

function deletePost(id) {
  return Post.remove(id).catch((error) => {
    throw Error(error);
  });
}

module.exports = {
  getAllPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
};
