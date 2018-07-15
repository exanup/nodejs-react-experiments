const Post = require('../models/Post');
const commentService = require('../services/comment');
const userService = require('../services/user');
const { withPrettyDateTime } = require('../utils/date');

async function getPostsWithAuthor(posts) {
  return Promise.all(
    posts.map(async (post) => {
      const author = await userService.getUserById(post.author_id);
      delete author.hash;
      return { ...post, author };
    }),
  );
}

async function getPostsWithComments(posts) {
  return Promise.all(
    posts.map(async (post) => {
      const comments = await commentService.getAllComments(post.id);
      return { ...post, comments };
    }),
  );
}

async function getPostWithAuthor(post) {
  const author = await userService.getUserById(post.author_id);
  delete author.hash;
  return { ...post, author };
}

async function getPostWithComments(post) {
  const comments = await commentService.getAllComments(post.id);
  const postWithComment = { ...post, comments };
  return postWithComment;
}

async function getAllPosts(userId) {
  const posts = (await Post.fetchAll(userId)).map(post => withPrettyDateTime(post));
  const postsWithAuthor = await getPostsWithAuthor(posts);
  const postsWithComments = await getPostsWithComments(postsWithAuthor);
  return postsWithComments;
}

async function getPost(id, userId) {
  const post = withPrettyDateTime(await Post.fetch(id, userId));
  const postWithAuthor = await getPostWithAuthor(post);
  const postWithComments = await getPostWithComments(postWithAuthor);
  return postWithComments;
}

// async function getAllPosts(id, userId) {
//   return Post.fetchAllWithComments(id);
// }

// async function getPost(id, userId) {
//   return Post.fetchWithComments(id);
// }

async function createPost(post, userId) {
  const response = await Post.create(post, userId);
  return response;
}

async function updatePost(id, updatedPost, userId) {
  const response = await Post.update(id, updatedPost, userId);
  return response;
}

async function deletePost(id, userId) {
  const response = await Post.remove(id, userId);
  return response;
}

module.exports = {
  getAllPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
};
