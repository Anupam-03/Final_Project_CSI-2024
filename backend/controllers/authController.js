const User = require('../models/userModel');
const asyncHandler = require('express-async-handler');
const generateToken = require('../utils/generateToken');

// Register new user
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;
    const userExists = await User.findOne({ email });

    if (userExists) {
        res.status(400);
        throw new Error('User already exists');
    }

    const user = await User.create({
        name,
        email,
        password,
    });

    try {
        if (user) {
            res.status(201).json({
                message: "User Registration Successful",
                _id: user._id,
                name: user.name,
                email: user.email,
                token: generateToken(user._id),
            });
        } else {
            res.status(400);
            throw new Error('Invalid user data');
        }
    } catch (error) {
        res.status(500);
        throw new Error('Error from register user');
    }

    
});

// login user
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
        res.status(400);
        throw new Error('User Not exists');
    }

    // Check if user exists and the password matches
    if (user && (await user.matchPassword(password))) {
        res.json({
            message: "Login Successful",
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id), // Generate a token for the user 
        });
    }
    else {
        res.status(400);
        throw new Error('Invalid user data');
    }


});


// Authenticate user & get token
const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id),
        });
    } else {
        res.status(401);
        throw new Error('Invalid email or password');
    }
});

module.exports = { registerUser, loginUser, authUser };
