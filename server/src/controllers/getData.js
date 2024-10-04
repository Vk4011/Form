// controllers/getFormDataController.js
const Form = require('../models/Form');

// Controller to handle fetching form data and sending it in JSON format
const getData = async (req, res) => {
  try {
    console.log('Fetching form data from the database...');
    // Fetch all form submissions from the database
    const forms = await Form.find();

    // Check if any forms were retrieved
    if (!forms || forms.length === 0) {
      console.log('No form data found');
      return res.status(404).json({ message: 'No form data found' });
    }

    console.log('Form data retrieved:', forms);

    // Send the retrieved forms as JSON response
    res.json(forms);
  } catch (error) {
    console.error('Error fetching form data:', error);
    res.status(500).json({ message: 'Error fetching form data' });
  }
};

module.exports = { getData };
