// User schema (models/User.js)
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  picture: { type: String } // Optional, if you're storing profile pictures
});

const User = mongoose.model('User', userSchema);

module.exports = User;
