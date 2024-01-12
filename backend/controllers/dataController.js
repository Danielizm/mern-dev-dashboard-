const Data = require('../models/Data');  // Assuming you have a Data model for the table data

exports.getData = async (req, res) => {
  try {
    const data = await Data.find();  // Retrieve data from MongoDB
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Create a new item
exports.createItem = async (req,res)=>{
  try{
    const newItem = new Data(req.body);
    await newItem.save();
    res.status(201).json(newItem);
  }catch(error){
    res.status(500).json({message:'Error creating item'});
  }
}

// Update an item by ID
exports.updateItem = async (req, res) => {
  try {
    const updatedItem = await Data.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedItem) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.json(updatedItem);  // Return the updated item
  } catch (error) {
    res.status(500).json({ message: 'Error updating item' });
  }
};

// Delete an item by ID
exports.deleteItem = async (req, res) => {
  try {
    const deletedItem = await Data.findByIdAndDelete(req.params.id);
    if (!deletedItem) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.json({ message: 'Item deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting item' });
  }
};