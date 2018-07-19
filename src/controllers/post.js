const express = require('express');
const Boom = require('boom');

const postService = require('../services/post');
const authenticate = require('../middleware/auth');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const posts = await postService.getAllPosts();
    res.json(posts);
  } catch (err) {
    next(Boom.badRequest(err));
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const post = await postService.getPost(req.params.id);
    res.json(post);
  } catch (err) {
    next(Boom.badRequest(err));
  }
});

router.post('/', authenticate(), async (req, res, next) => {
  try {
    const post = await postService.createPost(req.body, req.user.id);
    res.json(post);
  } catch (err) {
    next(Boom.badRequest(err));
  }
});

router.put('/:id', authenticate(), async (req, res, next) => {
  try {
    const response = await postService.updatePost(req.params.id, req.body, req.user.id);
    res.json(response);
  } catch (err) {
    next(Boom.badRequest(err));
  }
});

router.delete('/:id', authenticate(), async (req, res, next) => {
  try {
    const response = await postService.deletePost(req.params.id, req.user.id);
    res.json(response);
  } catch (err) {
    next(Boom.badRequest(err));
  }
});

module.exports = router;
