// utils/pdfGenerator.js
const PDFDocument = require('pdfkit');

async function generatePDF(forms, res) {
  try {
    const doc = new PDFDocument({ margin: 30, size: 'A4' });

    // Set response headers
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=FormSubmissions.pdf');

    // Pipe the PDF into the response
    doc.pipe(res);

    // Add content to the PDF
    doc.fontSize(18).text('Form Submissions', { align: 'center' });
    doc.moveDown();

    forms.forEach((form, index) => {
      doc.fontSize(12).fillColor('black').text(`SI. NO: ${index + 1}`);
      doc.text(`RM Name: ${form.rmName}`);
      doc.text(`Customer Status: ${form.customerStatus}`);
      doc.text(`Customer Name: ${form.customerFullName}`);
      doc.text(`Email: ${form.email}`);
      doc.text(`Phone: ${form.phoneNumber}`);
      doc.text(`Income Type: ${form.typeOfIncome}`);
      doc.text(`Business: ${form.business || 'N/A'}`);
      doc.text(`Income: ${form.income ? form.income + ' ' + form.unit : 'N/A'}`);
      doc.text(`Existing Loans: ${form.existingLoans || 'None'}`);
      doc.text(`Loan Requirement: ${form.loanRequirement ? form.loanRequirement.toLocaleString() + ' ' + form.unit : 'N/A'}`);
      doc.text(`Type of Loan: ${form.typeOfLoan}`);
      doc.text(`Other Loan Type: ${form.otherLoanType || 'N/A'}`);
      doc.text(`Remarks: ${form.remarks || 'No remarks'}`);
      doc.text(`Follow Up: ${form.followUpRequired}`);
      doc.text(`Location: ${form.location}`);
      doc.text(`Unit: ${form.unit}`);
      doc.text(`Created At: ${new Date(form.createdAt).toLocaleString()}`);
      doc.text(`Updated At: ${new Date(form.updatedAt).toLocaleString()}`);
      doc.moveDown();
      doc.moveDown();
    });

    // Finalize the PDF and end the stream
    doc.end();
  } catch (error) {
    console.error('PDF generation error:', error);
    throw error;
  }
}

module.exports = { generatePDF };

