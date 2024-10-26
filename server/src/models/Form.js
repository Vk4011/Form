// models/Form.js
const mongoose = require('mongoose');

// Define the schema for form submissions
const formSchema = new mongoose.Schema(
  {
    rmName: { type: String, required: true },
    customerStatus: {
      type: String,
      required: true,
      enum: ['visited interested', 'visited not interested', 'visited not available'],
    },
    customerFullName: { type: String, required: true },
    email: { type: String },
    phoneNumber: { type: String, required: true },
    typeOfIncome: { type: String, required: true },
    business: { type: String },
    income: { type: Number },
    existingLoans: { type: String },
    loanRequirement: { type: Number },
    typeOfLoan: { type: String },
    otherLoanType: { type: String },
    remarks: { type: String, required: true },
    followUpRequired: { type: String, required: true },
    location: { type: String, required: true },
    unit: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Form', formSchema);
