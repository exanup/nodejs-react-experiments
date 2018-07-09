const express = require('express');
const postService = require('../services/post');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const postsPromise = postService.getAllPosts();
    res.json(await postsPromise);
  } catch (err) {
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const postPromise = postService.getPost(req.params.id);
    res.json(await postPromise);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const responsePromise = postService.createPost(req.body);
    res.json(await responsePromise);
  } catch (err) {
    next(err);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const responsePromise = postService.updatePost(req.params.id, req.body);
    res.json(await responsePromise);
  } catch (err) {
    next(err);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const responsePromise = postService.deletePost(req.params.id);
    res.json(await responsePromise);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
