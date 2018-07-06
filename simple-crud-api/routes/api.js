const express = require('express');
const postController = require('../controllers/post-controller');
// const commentController = require('../controllers/comment-controller');

const router = express.Router();

router.use('/posts', postController);
// router.use('/posts/:postId/comments', commentController);

// fallback router
router.all('*', (req, res) => {
  res.status(404).json({
    message: 'Not Found',
  });
});

module.exports = router;
