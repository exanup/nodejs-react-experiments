const Comment = require('../models/Comment');
const userService = require('../services/user');
const { withPrettyDateTime } = require('../utils/date');

async function getCommentsWithAuthor(comments) {
  return Promise.all(
    comments.map(async (comment) => {
      const author = await userService.getUserById(comment.author_id);
      delete author.hash;
      return { ...comment, author };
    }),
  );
}

async function getCommentWithAuthor(comment) {
  const author = await userService.getUserById(comment.author_id);
  delete author.hash;
  return { ...comment, author };
}

async function getAllComments(postId) {
  const comments = (await Comment.fetchAll(postId)).map(comment => withPrettyDateTime(comment));
  const commentsWithAuthor = await getCommentsWithAuthor(comments);
  return commentsWithAuthor;
}

async function getComment(id, postId) {
  const comment = withPrettyDateTime(await Comment.fetch(id, postId));
  const commentWithAuthor = await getCommentWithAuthor(comment);
  return commentWithAuthor;
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
