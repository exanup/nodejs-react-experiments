const express = require('express');
const postsController = require('./controllers/posts');
const commentsController = require('./controllers/comments');

const router = express.Router();

router.use('/posts', postsController);
router.use('/posts/:postId/comments', commentsController);

// fallback router
router.all('*', (req, res) => {
  // res.status(404);
  res.status(404).json({
    message: 'Not Found',
  });
});


module.exports = router;
