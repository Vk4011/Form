const Form = require('../models/Form');

const submitForm = async (req, res) => {
  const {
    rmName,
    customerFullName,
    email,
    phoneNumber,
    typeOfIncome,
    business,
    income, // Change 'Income' to 'income' (case sensitivity)
    existingLoans,
    loanRequirement,
    typeOfLoan,
    otherLoanType,
    remarks,
    followUpRequired,
    location,
    unit, // Add unit to destructured body
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
    !location ||
    !unit // Validate the unit field
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
      business: business || null,
      income: income || null,
      existingLoans: existingLoans || null,
      loanRequirement: loanRequirement || null,
      typeOfLoan: typeOfLoan === 'Other' ? otherLoanType : typeOfLoan,
      otherLoanType: typeOfLoan === 'Other' ? otherLoanType : null,
      remarks: remarks || null,
      followUpRequired,
      location,
      unit, // Include the unit field
    });

    await newForm.save();
    res.status(200).json({ message: 'Form submitted successfully', data: newForm });
  } catch (error) {
    res.status(500).json({ error: 'Error submitting form', details: error.message });
  }
};

module.exports = {
  submitForm,
};
