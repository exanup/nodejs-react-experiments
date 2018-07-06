const post = require('../models/post');

postService = {
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
    return post.delete(id);
  }
};

module.exports = postService;
