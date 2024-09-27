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

    // Start building the HTML response
    let html = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Form Data</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #121212;
            color: green;
            margin: 20px;
          }
          table {
            width: 100%;
            border-collapse: collapse;
          }
          table, th, td {
            border: 1px solid #ffffff;
          }
          th, td {
            padding: 12px;
            text-align: left;
          }
          th {
            background-color: #1e1e1e;
          }
          tr:nth-child(even) {
            background-color: #2e2e2e;
          }
        </style>
      </head>
      <body>
        <h1>Submitted Form Data</h1>
        <table>
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Business</th>
              <th>Turnover</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
    `;

    // Insert form data into the HTML table
    forms.forEach((form) => {
      html += `
        <tr>
          <td>${form.fullname}</td>
          <td>${form.email}</td>
          <td>${form.phone}</td>
          <td>${form.business}</td>
          <td>${form.turnover}</td>
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
