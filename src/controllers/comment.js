const express = require('express');
const commentService = require('../services/comment');

const router = express.Router();

router.post('/', async (req, res, next) => {
  try {
    const responsePromise = commentService.createComment(req.body);
    res.json(await responsePromise);
  } catch (err) {
    next(err);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const responsePromise = commentService.updateComment(req.params.id, req.body);
    res.json(await responsePromise);
  } catch (err) {
    next(err);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const responsePromise = commentService.deleteComment(req.params.id);
    res.json(await responsePromise);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
