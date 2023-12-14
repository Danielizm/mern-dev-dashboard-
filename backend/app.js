const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const dataRoutes = require('./routes/dataRoutes');

// Load environment variables
dotenv.config();

// Initialize the app
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((error) => console.error('MongoDB connection failed:', error));

// Routes
app.use('/api/auth', authRoutes);  // Authentication routes
app.use('/api/data', dataRoutes);  // Data routes for admin dashboard

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
