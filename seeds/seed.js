const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');
// Import the data from the json files
const userData = require('./userData.json');
const blogData = require('./blogData.json');
const commentData = require('./commentData.json');

// seedDatabase function
const seedDatabase = async () => {
    await sequelize.sync({ force: true });
    // Create the user data
    const users = await User.bulkCreate(userData, {
      individualHooks: true,
      returning: true,
    });
  // Create the blog data
    for (const blog of blogData) {
      await Blog.create({
        ...blog,
        user_id: users[Math.floor(Math.random() * users.length)].id,
      });
    }
    const comments = await Comment.bulkCreate(commentData, {
      individualHooks: true,
      returning: true,
    });
  
    process.exit(0);
  };
  
  seedDatabase();
