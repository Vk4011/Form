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

    // Start building the HTML response
    let html = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <!-- ... styles ... -->
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
              <!-- Remove Uploaded Document column -->
              <!-- <th>Uploaded Document</th> -->
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
          <!-- Remove Uploaded Document cell -->
          <!-- <td>${form.uploadedDocument ? `<a href="/uploads/${form.uploadedDocument}" target="_blank">View Document</a>` : 'No Document'}</td> -->
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
