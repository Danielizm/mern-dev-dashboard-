const express = require('express');
const { getData } = require('../controllers/dataController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

// Protected route for fetching data
router.get('/', authMiddleware, getData);

module.exports = router;
