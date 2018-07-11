const Comment = require('../models/Comment');

function getAllComments(postId) {
  return Comment.fetchAll(postId);
}

function getComment(id, postId) {
  return Comment.fetch(id, postId);
}

function createComment(reqData, authorId) {
  return Comment.create(reqData, authorId);
}

function updateComment(id, reqData, authorId) {
  return Comment.update(id, reqData, authorId);
}

function deleteComment(id, authorId) {
  return Comment.remove(id, authorId);
}

module.exports = {
  getAllComments,
  getComment,
  createComment,
  updateComment,
  deleteComment,
};
