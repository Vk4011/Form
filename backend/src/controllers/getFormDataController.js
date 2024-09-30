// controllers/getFormDataController.js
const Form = require('../models/Form');

// Controller to handle fetching form data and sending it in HTML format
const getFormData = async (req, res) => {
  try {
    console.log('Fetching form data from the database...');
    // Fetch all form submissions from the database
    const forms = await Form.find();

    // Check if any forms were retrieved
    if (!forms || forms.length === 0) {
      console.log('No form data found');
      return res.status(404).send('<h1>No form data found</h1>');
    }

    console.log('Form data retrieved:', forms);

    // Start building the HTML response with dark theme and green font
    let html = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Submitted Form Data</title>
        <style>
          body {
            background-color: #2c2c2c; /* Dark background */
            color: #00ff00; /* Green font color */
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
          }
          h1 {
            text-align: center;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
          }
          th, td {
            border: 1px solid #444;
            padding: 10px;
            text-align: left;
          }
          th {
            background-color: #444; /* Darker header */
          }
          tr:nth-child(even) {
            background-color: #333; /* Alternate row color */
          }
          tr:hover {
            background-color: #555; /* Row hover color */
          }
        </style>
      </head>
      <body>
        <h1>Submitted Form Data</h1>
        <table>
          <thead>
            <tr>
              <th>RM Name</th>
              <th>Customer Full Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Type of Income</th>
              <th>Business Name</th>
              <th>Business Turnover</th>
              <th>Existing Loans</th>
              <th>Loan Requirement</th>
              <th>Type of Loan</th>
              <th>Remarks</th>
              <th>Follow-up Required</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
    `;

    // Insert form data into the HTML table
    forms.forEach((form) => {
      html += `
        <tr>
          <td>${form.rmName}</td>
          <td>${form.customerFullName}</td>
          <td>${form.email}</td>
          <td>${form.phoneNumber}</td>
          <td>${form.typeOfIncome}</td>
          <td>${form.businessName || ''}</td>
          <td>${form.businessTurnover || ''}</td>
          <td>${form.existingLoans || ''}</td>
          <td>${form.loanRequirement || ''}</td>
          <td>${form.typeOfLoan}</td>
          <td>${form.remarks || ''}</td>
          <td>${form.followUpRequired}</td>
          <td>${form.location}</td>
        </tr>`;
    });

    // Close the table and HTML
    html += `
          </tbody>
        </table>
      </body>
      </html>
    `;

    // Send the generated HTML as the response
    res.send(html);
  } catch (error) {
    console.error('Error fetching form data:', error);
    res.status(500).send('<h1>Error fetching form data</h1>');
  }
};

module.exports = { getFormData };
