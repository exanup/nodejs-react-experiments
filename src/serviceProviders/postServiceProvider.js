const Post = require('../models/Post');
const Comment = require('../models/Comment');

async function getPostsWithComments(posts) {
  // map function does not wait for await, which means it runs all
  //  the function calls simultaneously into a group being executed
  //  in parallel. This improves performance compared to running a
  //  for loop and using await there, which halts its execution in
  //  while waiting for data in every iteration.
  const postsWithCommentsPromises = posts.map(async (post) => {
    const comments = await Comment.fetchAll(post.id);
    return { ...post, comments };
  });

  let postsWithComments = [];
  for await (const postWithComments of  postsWithCommentsPromises) {
    postsWithComments.push(postWithComments);
  }

  return postsWithComments;
}

async function getPostWithComments(postId, post) {
  const comments = await Comment.fetchAll(postId);
  const postWithComment = { ...post, comments };
  return postWithComment;
}

async function getAllPosts() {
  try {
    const postsPromise = Post.fetchAll();
    const postsWithCommentsPromise = getPostsWithComments(await postsPromise);
    return postsWithCommentsPromise;
  } catch (err) {
    throw Error(`${err}. ${err.hint ? err.hint : ''}`);
  }
}

async function getPost(id) {
  try {
    const postPromise = Post.fetch(id);
    const postWithCommentsPromise = getPostWithComments(id, await postPromise);
    return postWithCommentsPromise;
  } catch (err) {
    throw Error(`${err}. ${err.hint ? err.hint : ''}`);
  }
}

async function createPost(post) {
  try {
    const responsePromise = Post.create(post);
    return responsePromise;
  } catch (err) {
    throw Error(`${err}. ${err.hint ? err.hint : ''}`);
  }
}

async function updatePost(id, updatedPost) {
  try {
    const responsePromise = Post.update(id, updatedPost);
    return responsePromise;
  } catch (err) {
    throw Error(`${err}. ${err.hint ? err.hint : ''}`);
  }
}

async function deletePost(id) {
  try {
    const responsePromise = Post.remove(id);
    return responsePromise;
  } catch (err) {
    throw Error(`${err}. ${err.hint ? err.hint : ''}`);
  }
}

module.exports = {
  getAllPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
};
