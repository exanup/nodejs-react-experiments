const express = require('express');
const postController = require('../controllers/postController');
const commentController = require('../controllers/commentController');

const router = express.Router();

router.use('/posts', postController);
router.use('/comments', commentController);

// fallback router
router.all('*', (req, res) => {
  res.status(404).json({
    message: 'Not Found',
  });
});

module.exports = router;
