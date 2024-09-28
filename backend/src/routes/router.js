const express = require('express');
const { submitForm } = require('../controllers/submitController');
const { getFormData } = require('../controllers/getFormDataController');
const router = express.Router();
const Form = require('../models/Form');

router.post('/submit-form', submitForm);
router.get('/data', getFormData);




router.get('/getdata', async (req, res) => {
    try {
      console.log('Fetching form data from the database...');
      // Fetch all form submissions from the database
      const forms = await Form.find();
  
      // Check if any forms were retrieved
      if (!forms || forms.length === 0) {
        console.log('No form data found');
        return res.status(404).json({ message: 'No form data found' });
      }
  
      console.log('Form data retrieved:', forms);
      
      // Send the form data as a JSON response
      res.json(forms);
    } catch (error) {
      console.error('Error fetching form data:', error);
      res.status(500).json({ message: 'Error fetching form data' });
    }
  });
  

module.exports = router;




// C:\Users\vikra\OneDrive\Desktop\APPS>curl -X POST http://localhost:8080/api/submit-form -H "Content-Type: application/json" -d "{\"fullname\": \"John Doe\", \"email\": \"johndoe@example.com\", \"phone\": \"1234567890\", \"business\": \"Doe Enterprises\", \"turnover\": 500000, \"location\": \"New York\"}"
// {"message":"Form submitted successfully","data":{"fullname":"John Doe","email":"johndoe@example.com","phone":"1234567890","business":"Doe Enterprises","turnover":500000,"location":"New York","_id":"66f7071152f7bb29491dd56e","createdAt":"2024-09-27T19:27:13.742Z","updatedAt":"2024-09-27T19:27:13.742Z","__v":0}}