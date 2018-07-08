const comment = require('../models/Comment');

function getAllComments(postId) {
  return comment.fetchAll(postId);
}

function getComment(id) {
  return comment.fetch(id);
}

function createComment(reqData) {
  return comment.create(reqData);
}

function updateComment(id, reqData) {
  return comment.update(id, reqData);
}

function deleteComment(id) {
  return comment.remove(id);
}

module.exports = {
  getAllComments,
  getComment,
  createComment,
  updateComment,
  deleteComment,
};
