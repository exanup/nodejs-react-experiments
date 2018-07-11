const express = require('express');
const Boom = require('boom');

const postService = require('../services/post');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const posts = await postService.getAllPosts(req.user.id);
    res.json(posts);
  } catch (err) {
    next(Boom.badRequest());
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const post = await postService.getPost(req.params.id, req.user.id);
    res.json(post);
  } catch (err) {
    next(Boom.badRequest());
  }
});

router.post('/', async (req, res, next) => {
  try {
    const response = await postService.createPost(req.body, req.user.id);
    res.json(response);
  } catch (err) {
    next(Boom.badRequest());
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const response = await postService.updatePost(req.params.id, req.body, req.user.id);
    res.json(response);
  } catch (err) {
    next(Boom.badRequest());
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const response = await postService.deletePost(req.params.id, req.user.id);
    res.json(response);
  } catch (err) {
    next(Boom.badRequest());
  }
});

module.exports = router;
