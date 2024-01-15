const express = require('express');
const { getData,createItem,updateItem,deleteItem } = require('../controllers/dataController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

// Protected route for fetching data
router.get('/', authMiddleware, getData);

// Create a new item (POST)
router.post('/', authMiddleware, createItem);

// Update an existing item (PUT)
router.put('/:id', authMiddleware, updateItem);

// Delete an item (DELETE)
router.delete('/:id', authMiddleware, deleteItem);

module.exports = router;
