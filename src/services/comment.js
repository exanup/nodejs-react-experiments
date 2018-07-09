const Comment = require('../models/Comment');

function getAllComments(postId) {
  return Comment.fetchAll(postId);
}

function getComment(id) {
  return Comment.fetch(id);
}

function createComment(reqData) {
  return Comment.create(reqData);
}

function updateComment(id, reqData) {
  return Comment.update(id, reqData);
}

function deleteComment(id) {
  return Comment.remove(id);
}

module.exports = {
  getAllComments,
  getComment,
  createComment,
  updateComment,
  deleteComment,
};
