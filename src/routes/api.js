const express = require('express');
const postController = require('../controllers/post');
const commentController = require('../controllers/comment');
const registerController = require('../controllers/register');
const authController = require('../controllers/auth');

const router = express.Router();

router.use('/posts', postController);
router.use('/comments', commentController);
router.use('/register', registerController);
router.use('/login', authController);

// fallback router
router.all('*', (req, res) => {
  res.status(404).json({
    message: 'Not Found',
  });
});

module.exports = router;
