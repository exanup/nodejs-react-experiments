const express = require('express');
const Boom = require('boom');

const commentService = require('../services/comment');

const router = express.Router();

router.post('/', async (req, res, next) => {
  try {
    const response = await commentService.createComment(req.body, req.user.id);
    res.json(response);
  } catch (err) {
    next(Boom.badRequest(err));
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const response = await commentService.updateComment(req.params.id, req.body, req.user.id);
    res.json(response);
  } catch (err) {
    next(Boom.badRequest(err));
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const response = await commentService.deleteComment(req.params.id, req.user.id);
    res.json(response);
  } catch (err) {
    next(Boom.badRequest(err));
  }
});

module.exports = router;
