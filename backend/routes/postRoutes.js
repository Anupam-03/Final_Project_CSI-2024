const express = require('express');
const router = express.Router();
const {
    createPost,
    getPosts,
    getPostById,
    updatePost,
    deletePost,
    searchPosts,
} = require('../controllers/postController');
const { protect } = require('../middleware/authMiddleware');

router.route('/search').get(searchPosts);
router.route('/').post(protect, createPost).get(getPosts);
router.route('/:id').get(getPostById).put(protect, updatePost).delete(protect, deletePost);

module.exports = router;
