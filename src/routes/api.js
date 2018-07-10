const express = require('express');

// middleware
const authenticate = require('../middleware/auth');

// controllers
const postController = require('../controllers/post');
const commentController = require('../controllers/comment');
const registerController = require('../controllers/register');
const authController = require('../controllers/auth');

const router = express.Router();

router.use('/posts', authenticate, postController);
router.use('/comments', authenticate, commentController);
router.use('/register', registerController);
router.use('/auth', authController);

module.exports = router;
