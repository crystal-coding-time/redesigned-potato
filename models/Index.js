// Import the models
const User = require('./User');
const Blog = require('./Blog');
const Comment = require('./Comment');

//User has many blogs
User.hasMany(Blog, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

// Blog belongs to User
Blog.belongsTo(User, {
  foreignKey: 'user_id'
});

// Blog has many comments
Blog.hasMany(Comment,{
  foreignKey: 'blog_id'
});

//Comment belongs to Blog
Comment.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Blog, Comment };