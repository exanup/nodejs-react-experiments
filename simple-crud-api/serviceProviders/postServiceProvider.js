const post = require('../models/Post');
const comment = require('../models/Comment');

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

function fetchAllComments(postId) {
  return comment.fetchCommentsFromPost(postId);
}

module.exports = {
  getAllPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
  fetchAllComments,
};
