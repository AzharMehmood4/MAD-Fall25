const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');  // CHANGED: bcryptjs instead of bcrypt
const User = require('../models/User');

// SIGNUP ROUTE (Updated for bcryptjs)
router.post('/auth/signup', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Validation
    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Please fill all fields' });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already registered' });
    }

    // Hash password before saving (bcryptjs)
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    
    res.status(201).json({ 
      message: 'User created successfully',
      user: { id: newUser._id, name, email } 
    });

  } catch (error) {
    console.error('Signup Error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// LOGIN ROUTE (Updated for bcryptjs)
router.post('/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validation
    if (!email || !password) {
      return res.status(400).json({ message: 'Please provide email and password' });
    }

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Check password match (bcryptjs)
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    //LOGIN SUCCESS
    res.status(200).json({
      message: 'Login successful',
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    });

  } catch (error) {
    console.error('Login Error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;