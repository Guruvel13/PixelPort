// In userRoutes.js or equivalent
const express = require('express');
const User = require('../models/Users');
const router = express.Router();

router.get('/user', async (req, res) => {
  try {
    const user = await User.findById(req.userId); 
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      picture: user.picture, 
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
