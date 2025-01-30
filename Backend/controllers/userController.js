const User = require('../models/Users');

// Get User Profile
exports.getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.userId);
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json({ error: 'User not found' });
  }
};

// Update User Profile
exports.updateUserProfile = async (req, res) => {
  const { firstName, lastName, email } = req.body;
  try {
    const user = await User.findById(req.user.userId);
    user.firstName = firstName || user.firstName;
    user.lastName = lastName || user.lastName;
    user.email = email || user.email;
    
    await user.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json({ error: 'Unable to update profile' });
  }
};
