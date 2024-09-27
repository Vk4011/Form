const mongoose = require('mongoose');

// Define the schema for form submissions
const formSchema = new mongoose.Schema({
  fullname: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  business: { type: String, required: true },
  turnover: { type: Number, required: true },
  location: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Form', formSchema);
