const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');

dotenv.config(); // Load environment variables from .env file

const app = express();
const port = process.env.PORT || 5000; // Allow dynamic port for deployment

// Middleware
app.use(cors());
app.use(express.json()); // Automatically parse incoming JSON requests

// MongoDB connection with improved error handling
const mongoURI = process.env.MONGODB_URI;

if (!mongoURI) {
  console.error("MONGODB_URI is not set in .env file");
  process.exit(1);
}

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch(err => {
    console.error("MongoDB connection error:", err);
    process.exit(1); // Exit process if database connection fails
  });

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);

// Global error handler (optional)
app.use((err, req, res, next) => {
  console.error("Unexpected error:", err);
  // Send a generic error message to the client (do not expose sensitive info)
  res.status(500).json({ error: "Internal Server Error" });
});

// Start the server with proper logging and error handling
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
