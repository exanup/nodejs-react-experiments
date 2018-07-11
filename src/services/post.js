const Post = require('../models/Post');
const Comment = require('../models/Comment');

async function getPostsWithComments(posts) {
  return Promise.all(
    posts.map(async (post) => {
      const comments = await Comment.fetchAll(post.id);
      return { ...post, comments };
    }),
  );
}

async function getPostWithComments(post) {
  const comments = await Comment.fetchAll(post.id);
  const postWithComment = { ...post, comments };
  return postWithComment;
}

async function getAllPosts(userId) {
  const posts = await Post.fetchAll(userId);
  const postsWithComments = await getPostsWithComments(posts);
  return postsWithComments;
}

async function getPost(id, userId) {
  const post = await Post.fetch(id, userId);
  const postWithComments = await getPostWithComments(post);
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
