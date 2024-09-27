const express = require('express');
const { submitForm } = require('../controllers/submitController');
const { getFormData } = require('../controllers/getFormDataController');
const router = express.Router();

router.post('/submit-form', submitForm);
router.get('/data', getFormData);

module.exports = router;




// C:\Users\vikra\OneDrive\Desktop\APPS>curl -X POST http://localhost:8080/api/submit-form -H "Content-Type: application/json" -d "{\"fullname\": \"John Doe\", \"email\": \"johndoe@example.com\", \"phone\": \"1234567890\", \"business\": \"Doe Enterprises\", \"turnover\": 500000, \"location\": \"New York\"}"
// {"message":"Form submitted successfully","data":{"fullname":"John Doe","email":"johndoe@example.com","phone":"1234567890","business":"Doe Enterprises","turnover":500000,"location":"New York","_id":"66f7071152f7bb29491dd56e","createdAt":"2024-09-27T19:27:13.742Z","updatedAt":"2024-09-27T19:27:13.742Z","__v":0}}