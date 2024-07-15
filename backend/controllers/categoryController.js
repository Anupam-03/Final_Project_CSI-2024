const asyncHandler = require('express-async-handler');
const Category = require('../models/categoryModel');

// @desc    Get all categories
// @route   GET /api/categories
// @access  Public
const getCategories = asyncHandler(async (req, res) => {
    const categories = await Category.find({});
    res.json(categories);
});

// @desc    Create a category
// @route   POST /api/categories
// @access  Private
const createCategory = asyncHandler(async (req, res) => {
    const { name } = req.body;

    if (!name) {
        res.status(400);
        throw new Error('Category name is required');
    }

    const category = new Category({
        name,
    });

    const createdCategory = await category.save();
    res.status(201).json(createdCategory);
});

module.exports = {
    getCategories,
    createCategory,
};
