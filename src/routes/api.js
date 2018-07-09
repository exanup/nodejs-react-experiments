const express = require('express');
const postController = require('../controllers/postController');
const commentController = require('../controllers/commentController');
const registerController = require('../controllers/registerController');

const router = express.Router();

router.use('/posts', postController);
router.use('/comments', commentController);
router.use('/register', registerController);

// fallback router
router.all('*', (req, res) => {
  res.status(404).json({
    message: 'Not Found',
  });
});

module.exports = router;
