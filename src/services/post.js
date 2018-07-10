const Post = require('../models/Post');
const Comment = require('../models/Comment');

async function getPostsWithComments(posts) {
  return Promise.all(posts.map(async (post) => {
    const comments = await Comment.fetchAll(post.id);
    return { ...post, comments };
  }));
}

async function getPostWithComments(postId, post) {
  const comments = await Comment.fetchAll(postId);
  const postWithComment = { ...post, comments };
  return postWithComment;
}

async function getAllPosts(userId) {
  try {
    const posts = await Post.fetchAll(userId);
    const postsWithComments = await getPostsWithComments(posts);
    return postsWithComments;
  } catch (err) {
    throw Error(`${err}. ${err.hint ? err.hint : ''} ${err.detail ? err.detail : ''}`);
  }
}

async function getPost(id, userId) {
  try {
    const post = await Post.fetch(id, userId);
    const postWithComments = await getPostWithComments(id, post);
    return postWithComments;
  } catch (err) {
    throw Error(`${err}. ${err.hint ? err.hint : ''} ${err.detail ? err.detail : ''}`);
  }
}

// async function getAllPosts(id, userId) {
//   try {
//     return Post.fetchAllWithComments(id);
//   } catch (err) {
//     throw new Error(err);
//   }
// }

// async function getPost(id, userId) {
//   try {
//     return Post.fetchWithComments(id);
//   } catch (err) {
//     throw new Error(err);
//   }
// }

async function createPost(post, userId) {
  try {
    const response = await Post.create(post, userId);
    return response;
  } catch (err) {
    throw Error(`${err}. ${err.hint ? err.hint : ''} ${err.detail ? err.detail : ''}`);
  }
}

async function updatePost(id, updatedPost, userId) {
  try {
    const response = await Post.update(id, updatedPost, userId);
    return response;
  } catch (err) {
    throw Error(`${err}. ${err.hint ? err.hint : ''} ${err.detail ? err.detail : ''}`);
  }
}

async function deletePost(id, userId) {
  try {
    const response = await Post.remove(id, userId);
    return response;
  } catch (err) {
    throw Error(`${err}. ${err.hint ? err.hint : ''} ${err.detail ? err.detail : ''}`);
  }
}

module.exports = {
  getAllPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
};
