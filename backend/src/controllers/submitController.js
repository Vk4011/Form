const Form = require('../models/Form');

// Controller to handle form submissions
const submitForm = async (req, res) => {
  const { fullname, email, phone, business, turnover, location } = req.body;

  // Basic validation to check if all fields are present
  if (!fullname || !email || !phone || !business || !turnover || !location) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    // Save the form data to the database
    const newForm = new Form({
      fullname,
      email,
      phone,
      business,
      turnover,
      location,
    });

    await newForm.save();
    res.status(200).json({ message: 'Form submitted successfully', data: newForm });
  } catch (error) {
    res.status(500).json({ error: 'Error submitting form', details: error.message });
  }
};

module.exports = { submitForm };
