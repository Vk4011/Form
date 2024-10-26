// routes/database.js
const express = require('express');
const router = express.Router();
const Form = require('../models/Form');
const { generateHtmlTable } = require('../utils/htmlGenerator');
const { generateExcel } = require('../utils/excelGenerator');
const { generatePDF } = require('../utils/pdfGenerator'); // Ensure this file exists

// Route to get data in JSON or HTML format
router.get('/getData', async (req, res) => {
  try {
    const forms = await Form.find().sort({ createdAt: -1 });

    res.format({
      'application/json': () => {
        res.json(forms);
      },
      'text/html': () => {
        res.send(generateHtmlTable(forms));
      },
    });
  } catch (error) {
    res.status(500).json({ error: 'Error fetching data', details: error.message });
  }
});

// Route to export data to Excel
router.get('/export-excel', async (req, res) => {
  try {
    const forms = await Form.find().sort({ createdAt: -1 });
    await generateExcel(forms, res);
  } catch (error) {
    console.error('Export error:', error);
    res.status(500).json({
      error: 'Error exporting Excel',
      details: error.message,
    });
  }
});

// Route to export data to PDF
router.get('/export-pdf', async (req, res) => {
  try {
    const forms = await Form.find().sort({ createdAt: -1 });
    await generatePDF(forms, res);
  } catch (error) {
    console.error('Export error:', error);
    res.status(500).json({
      error: 'Error exporting PDF',
      details: error.message,
    });
  }
});

module.exports = router;
