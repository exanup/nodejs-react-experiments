const express = require('express');
const postService = require('../services/post-service');

const router = express.Router();

router.get('/', (req, res, next) => {
  // show all posts
  postService
    .getAllPosts()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/:id', (req, res, next) => {
  // show the post
  postService
    .getPost(req.params.id)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      next(err);
    });
});

router.post('/', (req, res, next) => {
  // create a new post
  postService
    .createPost(req.body)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      next(err);
    });
});

router.put('/:id', (req, res, next) => {
  // update the post
  postService
    .updatePost(req.params.id, req.body)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      next(err);
    });
});

router.delete('/:id', (req, res, next) => {
  // delete the post
  postService
    .deletePost(req.params.id)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
