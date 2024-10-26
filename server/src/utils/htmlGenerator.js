// utils/htmlGenerator.js
function generateHtmlTable(forms) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <!-- Existing meta tags -->
      <title>Form Submissions</title>
      <style>
        /* Dark and Green Theme */
        body {
          background-color: #121212; /* Dark background */
          color: #e0e0e0; /* Light text color for readability */
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 20px;
        }

        h1 {
          color: #4CAF50; /* Green color for the heading */
          text-align: center;
          margin-bottom: 30px;
          font-size: 2.5em;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }

        .table-container {
          overflow-x: auto;
          margin: 20px auto;
          max-width: 95%;
          background-color: #1e1e1e; /* Slightly lighter dark background for contrast */
          border-radius: 12px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
          padding: 10px;
        }

        table {
          width: 100%;
          border-collapse: collapse;
          margin: 0 auto;
        }

        th, td {
          padding: 15px;
          text-align: left;
          border-bottom: 1px solid #333;
          white-space: nowrap;
        }

        th {
          background-color: #2c2c2c; /* Darker header background */
          color: #4CAF50; /* Green text for headers */
          font-weight: bold;
          position: sticky;
          top: 0;
          z-index: 1;
        }

        tr:nth-child(even) {
          background-color: #1a1a1a; /* Even rows darker */
        }

        tr:nth-child(odd) {
          background-color: #222; /* Odd rows slightly lighter */
        }

        tr:hover {
          background-color: #2a2a2a;
          transition: background-color 0.3s ease;
        }

        .status-badge {
          background-color: #4CAF50; /* Green badge */
          color: white;
          padding: 6px 12px;
          border-radius: 15px;
          font-size: 0.9em;
          display: inline-block;
          min-width: 100px;
          text-align: center;
        }

        .timestamp {
          color: #888;
          font-size: 0.9em;
        }

        .serial-number {
          font-weight: bold;
          color: #4CAF50; /* Green serial number */
          text-align: center;
        }

        .null-value {
          color: #666;
          font-style: italic;
        }

        .remarks {
          max-width: 200px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .location {
          color: #4CAF50; /* Green location text */
          font-size: 0.9em;
        }

        .export-container {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin: 30px auto;
          max-width: 95%;
        }

        .export-button {
          background-color: #1e1e1e; /* Dark button background */
          color: #4CAF50; /* Green text */
          border: 2px solid #4CAF50; /* Green border */
          padding: 12px 24px;
          border-radius: 8px;
          cursor: pointer;
          font-size: 1em;
          font-weight: bold;
          display: flex;
          align-items: center;
          gap: 10px;
          transition: all 0.3s ease;
        }

        .export-button:hover {
          background-color: #4CAF50; /* Green background on hover */
          color: #fff; /* White text on hover */
          box-shadow: 0 4px 15px rgba(76, 175, 80, 0.3);
          transform: translateY(-2px);
        }

        .export-button svg {
          width: 20px;
          height: 20px;
        }

        .excel-button {
          border-color: #4CAF50;
        }

        .pdf-button {
          border-color: #4CAF50;
        }

        @media (max-width: 768px) {
          .table-container {
            margin: 10px;
            padding: 5px;
          }

          th, td {
            padding: 10px;
            font-size: 0.9em;
          }

          .remarks {
            max-width: 100px;
          }
        }
      </style>
    </head>
    <body>
      <h1>Form Submissions</h1>
      <div class="table-container">
        <table>
          <thead>
            <tr>
              <th>SI. NO</th>
              <th>RM Name</th>
              <th>Customer Status</th>
              <th>Customer Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Income Type</th>
              <th>Business</th>
              <th>Income</th>
              <th>Existing Loans</th>
              <th>Loan Requirement</th>
              <th>Type of Loan</th>
              <th>Other Loan Type</th>
              <th>Remarks</th>
              <th>Follow Up</th>
              <th>Location</th>
              <th>Unit</th>
              <th>Created At</th>
              <th>Updated At</th>
            </tr>
          </thead>
          <tbody>
            ${forms
              .map(
                (form, index) => `
              <tr>
                <td class="serial-number">${index + 1}</td>
                <td>${form.rmName}</td>
                <td><span class="status-badge">${form.customerStatus}</span></td>
                <td>${form.customerFullName}</td>
                <td>${form.email}</td>
                <td>${form.phoneNumber}</td>
                <td>${form.typeOfIncome}</td>
                <td>${form.business || '<span class="null-value">N/A</span>'}</td>
                <td>${form.income ? form.income + ' ' + form.unit : '<span class="null-value">N/A</span>'}</td>
                <td>${form.existingLoans || '<span class="null-value">None</span>'}</td>
                <td>${form.loanRequirement ? form.loanRequirement.toLocaleString() + ' ' + form.unit : '<span class="null-value">N/A</span>'}</td>
                <td>${form.typeOfLoan}</td>
                <td>${form.otherLoanType || '<span class="null-value">N/A</span>'}</td>
                <td class="remarks" title="${form.remarks || ''}">${form.remarks || '<span class="null-value">No remarks</span>'}</td>
                <td>${form.followUpRequired}</td>
                <td class="location">${form.location}</td>
                <td>${form.unit}</td>
                <td class="timestamp">${new Date(form.createdAt).toLocaleString()}</td>
                <td class="timestamp">${new Date(form.updatedAt).toLocaleString()}</td>
              </tr>
            `
              )
              .join('')}
          </tbody>
        </table>
      </div>

      <div class="export-container">
        <button onclick="window.location.href='/db/v1/export-excel'" class="export-button excel-button">
          <!-- SVG Icon -->
          Excel
        </button>
        <button onclick="window.location.href='/db/v1/export-pdf'" class="export-button pdf-button">
          <!-- SVG Icon -->
          PDF
        </button>
      </div>
    </body>
    </html>
  `;
}

module.exports = { generateHtmlTable };
