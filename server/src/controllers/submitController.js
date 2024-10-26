// controllers/formController.js
const Form = require('../models/Form');

const submitForm = async (req, res) => {
  const {
    rmName,
    customerStatus, // New field
    customerFullName,
    email,
    phoneNumber,
    typeOfIncome,
    business,
    income,
    existingLoans,
    loanRequirement,
    typeOfLoan,
    otherLoanType,
    remarks,
    followUpRequired,
    location,
    unit,
  } = req.body;

  // Basic validation to check if required fields are present
  if (
    !rmName ||
    !customerStatus || // Include in validation
    !customerFullName ||
    !email ||
    !phoneNumber ||
    !typeOfIncome ||
    !typeOfLoan ||
    !followUpRequired ||
    !location ||
    !unit
  ) {
    return res.status(400).json({ error: 'Required fields are missing' });
  }

  // Validate customer status value
  const validCustomerStatuses = ['visited interested', 'visited not interested', 'visited not available'];
  if (!validCustomerStatuses.includes(customerStatus)) {
    return res.status(400).json({ error: 'Invalid customer status value' });
  }

  try {
    // Save the form data to the database
    const newForm = new Form({
      rmName,
      customerStatus, // Include in form data
      customerFullName,
      email,
      phoneNumber,
      typeOfIncome,
      business: business || null,
      income: income || null,
      existingLoans: existingLoans || null,
      loanRequirement: loanRequirement || null,
      typeOfLoan: typeOfLoan === 'Other' ? otherLoanType : typeOfLoan,
      otherLoanType: typeOfLoan === 'Other' ? otherLoanType : null,
      remarks: remarks || null,
      followUpRequired,
      location,
      unit,
    });

    await newForm.save();
    res.status(200).json({ message: 'Form submitted successfully', data: newForm });
  } catch (error) {
    res.status(500).json({ error: 'Error submitting form', details: error.message });
  }
};

// Add a new function to get forms by customer status
const getFormsByCustomerStatus = async (req, res) => {
  const { status } = req.query;
  
  try {
    let query = {};
    if (status) {
      query.customerStatus = status;
    }
    
    const forms = await Form.find(query).sort({ createdAt: -1 });
    res.status(200).json({ forms });
  } catch (error) {
    res.status(500).json({ error: 'Error fetching forms', details: error.message });
  }
};

module.exports = {
  submitForm,
  getFormsByCustomerStatus,
};