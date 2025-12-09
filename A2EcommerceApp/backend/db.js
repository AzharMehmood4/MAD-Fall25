const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Debug: Check if URI is loaded
    console.log('Attempting to connect with URI:', process.env.MONGODB_URI ? 'URI loaded' : 'URI MISSING!');

    if (!process.env.MONGODB_URI) {
      throw new Error('MONGODB_URI is missing! Check your .env file');
    }

    // Connect to MongoDB using the URI from .env
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('MongoDB Connected Successfully!');
  } catch (error) {
    console.error('MongoDB Connection Error:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
