const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  // show all posts
  res.json({
    message: 'show all posts...',
    params: req.params,
  });
});

router.get('/:id', (req, res) => {
  // show the post
  res.json({
    message: 'show the post...',
    params: req.params,
  });
});

router.post('/', (req, res) => {
  // create a new post
  res.json({
    message: 'create a new post...',
    params: req.params,
  });
});

router.put('/:id', (req, res) => {
  // update the post
  res.json({
    message: 'update the post...',
    params: req.params,
  });
});

router.delete('/:id', (req, res) => {
  // delete the post
  res.json({
    message: 'delete the post...',
    params: req.params,
  });
});


module.exports = router;
