const express = require('express');
const commentService = require('../serviceProviders/commentServiceProvider');

const router = express.Router();

router.post('/', (req, res, next) => {
  // create a new comment
  commentService
    .createComment(req.body)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      next(err);
    });
});

router.put('/:id', (req, res, next) => {
  // update the comment
  console.log(11, req.params, req.body);
  commentService
    .updateComment(req.params.id, req.body)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      next(err);
    });
});

router.delete('/:id', (req, res, next) => {
  // delete the comment
  commentService
    .deleteComment(req.params.id)
    .then((data) => {
      // make sure all the comments are deleted too
      res.json(data);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
