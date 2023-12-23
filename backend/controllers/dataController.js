const Data = require('../models/Data');  // Assuming you have a Data model for the table data

exports.getData = async (req, res) => {
  try {
    const data = await Data.find();  // Retrieve data from MongoDB
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
