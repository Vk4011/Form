// controllers/clearDatabaseController.js
const Form = require('../models/Form');

const clearDatabase = async (req, res) => {
  try {
    await Form.deleteMany({});
    res.status(200).json({ message: 'Database cleared successfully' });
  } catch (error) {
    console.error('Error clearing database:', error);
    res.status(500).json({ error: 'Error clearing database', details: error.message });
  }
};

module.exports = { clearDatabase };
