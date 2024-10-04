// controllers/submitController.js
const Form = require('../models/Form');

// Remove multer imports and configuration
// const multer = require('multer');
// const path = require('path');

// Remove multer configuration
// const storage = multer.diskStorage({...});
// const fileFilter = (req, file, cb) => {...};
// const upload = multer({ storage: storage, fileFilter: fileFilter });

const submitForm = async (req, res) => {
  const {
    rmName,
    customerFullName,
    email,
    phoneNumber,
    typeOfIncome,
    businessName,
    businessTurnover,
    existingLoans,
    loanRequirement,
    typeOfLoan,
    otherLoanType,
    remarks,
    followUpRequired,
    location,
  } = req.body;

  // Basic validation to check if required fields are present
  if (
    !rmName ||
    !customerFullName ||
    !email ||
    !phoneNumber ||
    !typeOfIncome ||
    !typeOfLoan ||
    !followUpRequired ||
    !location
  ) {
    return res.status(400).json({ error: 'Required fields are missing' });
  }

  try {
    // Save the form data to the database
    const newForm = new Form({
      rmName,
      customerFullName,
      email,
      phoneNumber,
      typeOfIncome,
      businessName: businessName || null,
      businessTurnover: businessTurnover || null,
      existingLoans: existingLoans || null,
      loanRequirement: loanRequirement || null,
      typeOfLoan: typeOfLoan === 'Other' ? otherLoanType : typeOfLoan,
      otherLoanType: typeOfLoan === 'Other' ? otherLoanType : null,
      remarks: remarks || null,
      followUpRequired,
      location,
      // Remove the uploadedDocument field
      // uploadedDocument: req.file ? req.file.filename : null,
    });

    await newForm.save();
    res.status(200).json({ message: 'Form submitted successfully', data: newForm });
  } catch (error) {
    res.status(500).json({ error: 'Error submitting form', details: error.message });
  }
};

module.exports = {
  // Remove the export of upload middleware
  // upload,
  submitForm,
};
