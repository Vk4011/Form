// routes/export.js
const express = require('express');
const router = express.Router();
const Form = require('../models/Form');
const { generateExcel } = require('../utils/excelGenerator');
const { generatePDF } = require('../utils/pdfGenerator');

// Excel Export Route
router.get('/export-excel', async (req, res) => {
  try {
    const forms = await Form.find().sort({ createdAt: -1 });
    await generateExcel(forms, res);
  } catch (error) {
    res.status(500).json({ error: 'Error exporting Excel', details: error.message });
  }
});

// PDF Export Route
router.get('/export-pdf', async (req, res) => {
  try {
    const forms = await Form.find().sort({ createdAt: -1 });
    await generatePDF(forms, res);
  } catch (error) {
    res.status(500).json({ error: 'Error exporting PDF', details: error.message });
  }
});

module.exports = router;