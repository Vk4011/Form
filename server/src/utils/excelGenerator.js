// utils/excelGenerator.js
const ExcelJS = require('exceljs');

async function generateExcel(forms, res) {
  try {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Form Submissions');

    // Define columns
    worksheet.columns = [
      { header: 'SI. NO', key: 'serialNo', width: 8 },
      { header: 'RM Name', key: 'rmName', width: 15 },
      { header: 'Customer Status', key: 'customerStatus', width: 20 },
      { header: 'Customer Name', key: 'customerFullName', width: 20 },
      { header: 'Email', key: 'email', width: 25 },
      { header: 'Phone', key: 'phoneNumber', width: 15 },
      { header: 'Income Type', key: 'typeOfIncome', width: 15 },
      { header: 'Business', key: 'business', width: 20 },
      { header: 'Income', key: 'income', width: 15 },
      { header: 'Existing Loans', key: 'existingLoans', width: 15 },
      { header: 'Loan Requirement', key: 'loanRequirement', width: 20 },
      { header: 'Type of Loan', key: 'typeOfLoan', width: 15 },
      { header: 'Other Loan Type', key: 'otherLoanType', width: 15 },
      { header: 'Remarks', key: 'remarks', width: 30 },
      { header: 'Follow Up', key: 'followUpRequired', width: 10 },
      { header: 'Location', key: 'location', width: 15 },
      { header: 'Unit', key: 'unit', width: 10 },
      { header: 'Created At', key: 'createdAt', width: 20 },
      { header: 'Updated At', key: 'updatedAt', width: 20 },
    ];

    // Style the header row
    worksheet.getRow(1).font = { bold: true, color: { argb: 'FFFFFF' } };
    worksheet.getRow(1).fill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: '4CAF50' },
    };
    worksheet.getRow(1).alignment = { vertical: 'middle', horizontal: 'center' };

    // Add data rows
    forms.forEach((form, index) => {
      const row = worksheet.addRow({
        serialNo: index + 1,
        rmName: form.rmName || '',
        customerStatus: form.customerStatus || '',
        customerFullName: form.customerFullName || '',
        email: form.email || '',
        phoneNumber: form.phoneNumber || '',
        typeOfIncome: form.typeOfIncome || '',
        business: form.business || 'N/A',
        income: form.income ? `${form.income} ${form.unit}` : 'N/A',
        existingLoans: form.existingLoans || 'None',
        loanRequirement: form.loanRequirement ? `${form.loanRequirement.toLocaleString()} ${form.unit}` : 'N/A',
        typeOfLoan: form.typeOfLoan || '',
        otherLoanType: form.otherLoanType || 'N/A',
        remarks: form.remarks || 'No remarks',
        followUpRequired: form.followUpRequired || '',
        location: form.location || '',
        unit: form.unit || '',
        createdAt: form.createdAt ? new Date(form.createdAt).toLocaleString() : '',
        updatedAt: form.updatedAt ? new Date(form.updatedAt).toLocaleString() : '',
      });

      // Add alternating row colors
      if (index % 2) {
        row.fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: 'F5F5F5' },
        };
      }

      // Center the serial number
      row.getCell('serialNo').alignment = { horizontal: 'center' };
    });

    // Auto-fit columns
    worksheet.columns.forEach((column) => {
      column.width = Math.max(column.width, 12);
    });

    // Set borders for all cells
    worksheet.eachRow((row) => {
      row.eachCell((cell) => {
        cell.border = {
          top: { style: 'thin' },
          left: { style: 'thin' },
          bottom: { style: 'thin' },
          right: { style: 'thin' },
        };
      });
    });

    // Set response headers
    res.setHeader(
      'Content-Type',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    );
    res.setHeader('Content-Disposition', 'attachment; filename=FormSubmissions.xlsx');

    // Write to response and end
    await workbook.xlsx.write(res);
    res.end();
  } catch (error) {
    console.error('Excel generation error:', error);
    throw error;
  }
}

module.exports = { generateExcel };
