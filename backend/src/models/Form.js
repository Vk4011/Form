// models/Form.js
const mongoose = require('mongoose');

// Define the schema for form submissions
const formSchema = new mongoose.Schema(
  {
    rmName: { type: String, required: true },
    customerFullName: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    typeOfIncome: { type: String, required: true },
    businessName: { type: String },
    businessTurnover: { type: Number },
    existingLoans: { type: String },
    loanRequirement: { type: Number },
    typeOfLoan: { type: String, required: true },
    otherLoanType: { type: String },
    remarks: { type: String },
    followUpRequired: { type: String, required: true },
    location: { type: String, required: true },
    // Remove the uploadedDocument field
    // uploadedDocument: { type: String }, // Stores the filename or path
  },
  { timestamps: true }
);

module.exports = mongoose.model('Form', formSchema);
