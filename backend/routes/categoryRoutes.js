const express = require('express');
const router = express.Router();
const { getCategories, createCategory } = require('../controllers/categoryController');

// Route to get all categories
router.get('/', getCategories);

// Route to create a new category (authentication middleware may be needed)
router.post('/', createCategory);

module.exports = router;
