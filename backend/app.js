const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const dataRoutes = require('./routes/dataRoutes');

// Load environment variables
dotenv.config();

// Initialize the app
const app = express();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((error) => console.error('MongoDB connection failed:', error));

// Middleware to parse JSON
app.use(express.json());

// Configure CORS to allow requests from the frontend
const allowedOrigins = ['https://your-frontend.com', 'http://localhost:3000'];
app.use(cors({
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },  // Allow frontend to make requests to this backend
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],  // Specify allowed methods
  allowedHeaders: ['Content-Type', 'Authorization'],  // Allow headers needed for auth
  credentials: true          // Allow cookies to be sent (if needed for auth)
}));

// Routes
app.use('/api/auth', authRoutes);  // Authentication routes
app.use('/api/data', dataRoutes);  // Data routes for admin dashboard

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
