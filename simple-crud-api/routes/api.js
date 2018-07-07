const express = require('express');
const postController = require('../controllers/postController');

const router = express.Router();

router.use('/posts', postController);

// fallback router
router.all('*', (req, res) => {
  res.status(404).json({
    message: 'Not Found',
  });
});

module.exports = router;
