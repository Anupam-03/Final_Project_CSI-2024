const Post = require('../models/postModel');
const asyncHandler = require('express-async-handler');

// Create a new post
const createPost = asyncHandler(async (req, res) => {
    const { title, content, category } = req.body;

    const post = new Post({
        user: req.user._id,
        title,
        content,
        category,
    });

    const createdPost = await post.save();
    res.status(201).json(createdPost);
});

// Get all posts
const getPosts = asyncHandler(async (req, res) => {
    const posts = await Post.find();
    if(!posts) {
        return res.status(401).json("post not found")
    }
    res.json(posts);
});

// Get post by ID
const getPostById = asyncHandler(async (req, res) => {
    const post = await Post.findById(req.params.id);

    if (post) {
        res.json(post);
    } else {
        res.status(404);
        throw new Error('Post not found');
    }
});

// Update a post
const updatePost = asyncHandler(async (req, res) => {
    const { title, content, category } = req.body;

    const post = await Post.findById(req.params.id);

    if (post) {
        post.title = title;
        post.content = content;
        post.category = category;

        const updatedPost = await post.save();
        res.json(updatedPost);
    } else {
        res.status(404);
        throw new Error('Post not found');
    }
});

// Delete a post
const deletePost = asyncHandler(async (req, res) => {
    try {
        await Post.findByIdAndDelete(req.params.id);
        res.json({ message: 'Post removed' });
    } catch (error) {
        res.status(404);
        throw new Error('Post not found');
    }
});

// Search posts by title
const searchPosts = asyncHandler(async (req, res) => {
    try {
        const { keyword } = req.query;
        const regex = new RegExp(keyword, 'i'); // 'i' makes it case-insensitive
        const posts = await Post.find({
            $or: [
                { title: { $regex: regex } },
                { content: { $regex: regex } },
                { category: { $regex: regex } }
            ]
        });
        res.json(posts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = { createPost, getPosts, getPostById, updatePost, deletePost, searchPosts };
