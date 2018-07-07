const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  // show all comments
  res.json({
    message: 'show all comments...',
    params: req.params,
  });
});

router.get('/:id', (req, res) => {
  // show the comment
  res.json({
    message: 'showing the comment...',
    params: req.params,
  });
});

router.post('/', (req, res) => {
  // create a new comment
  res.json({
    message: 'create a new comment...',
    params: req.params,
  });
});

router.put('/:id', (req, res) => {
  // update the comment
  res.json({
    message: 'update the comment...',
    params: req.params,
  });
});

router.delete('/:id', (req, res) => {
  // delete the comment
  res.json({
    message: 'delete the comment...',
    params: req.params,
  });
});

module.exports = router;
