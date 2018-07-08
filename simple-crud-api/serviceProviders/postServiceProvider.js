const post = require('../models/Post');

function getAllPosts() {
  return post.fetchAll();
}

function getPost(id) {
  return post.fetch(id);
}

function createPost(reqData) {
  return post.create(reqData);
}

function updatePost(id, reqData) {
  return post.update(id, reqData);
}

function deletePost(id) {
  return post.remove(id);
}

module.exports = {
  getAllPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
};
