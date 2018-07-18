const express = require('express');

// controllers
const postController = require('../controllers/post');
const commentController = require('../controllers/comment');
const registerController = require('../controllers/register');
const authController = require('../controllers/auth');

const router = express.Router();

// routes
router.use('/posts', postController);
router.use('/comments', commentController);
router.use('/register', registerController);
router.use('/auth', authController);

module.exports = router;
