const express = require('express');
const postService = require('../services/post');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    // console.log(15151515151515151511, req.user);
    const posts = await postService.getAllPosts(req.user.id);
    res.json(posts);
  } catch (err) {
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const post = await postService.getPost(req.params.id, req.user.id);
    // console.log(1111);
    res.json(post);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const responsePromise = postService.createPost(req.body, req.user.id);
    res.json(await responsePromise);
  } catch (err) {
    next(err);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const responsePromise = postService.updatePost(req.params.id, req.body, req.user.id);
    res.json(await responsePromise);
  } catch (err) {
    next(err);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const responsePromise = postService.deletePost(req.params.id, req.user.id);
    res.json(await responsePromise);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
