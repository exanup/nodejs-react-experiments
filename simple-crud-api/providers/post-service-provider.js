const post = require('../models/Post');

const postService = {
  getAllPosts() {
    return post.fetchAll();
  },

  getPost(id) {
    return post.fetch(id);
  },

  createPost(reqData) {
    return post.create(reqData);
  },

  updatePost(id, reqData) {
    return post.update(id, reqData);
  },

  deletePost(id) {
    return post.remove(id);
  },
};

module.exports = postService;
