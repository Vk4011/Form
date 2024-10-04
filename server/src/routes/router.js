// routes/router.js
const express = require('express');
const { submitForm } = require('../controllers/submitController');
const { getFormData } = require('../controllers/getFormDataController');
const { clearDatabase } = require('../controllers/clearDatabaseController');
const { getData } = require('../controllers/getData');
const router = express.Router();

router.post('/submit-form', submitForm);
router.get('/data', getFormData);
router.get('/clear', clearDatabase); 
router.get("/getdata",getData) ;

module.exports = router;



// curl -X POST http://localhost:4500/api/submit-form -H 'Content-Type: application/json' -d '{"rmName":"John Doe","customerFullName":"Jane Smith","email":"jane.smith@example.com","phoneNumber":"1234567890","typeOfIncome":"Employee","businessName":"","businessTurnover":"0","existingLoans":"None","loanRequirement":"50000","typeOfLoan":"Personal Loan","remarks":"Test submission","followUpRequired":"Yes","location":"Lat: 40.7128, Long: -74.0060"}'
