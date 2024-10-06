const mongoose = require('mongoose');

// Define the schema for form submissions
const formSchema = new mongoose.Schema(
  {
    rmName: { type: String, required: true },
    customerFullName: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    typeOfIncome: { type: String, required: true },
    business: { type: String },
    income: { type: Number }, // Ensure this is a number
    existingLoans: { type: String },
    loanRequirement: { type: Number },
    typeOfLoan: { type: String, required: true },
    otherLoanType: { type: String },
    remarks: { type: String },
    followUpRequired: { type: String, required: true },
    location: { type: String, required: true },
    unit: { type: String, required: true }, // Ensure the unit field is defined
  },
  { timestamps: true }
);

module.exports = mongoose.model('Form', formSchema);
