const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const db = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('\n\t MongoDB connected \n');
    } catch (error) {
        console.log('\n\t MongoDB connection failed \n');
        console.log(error);
    }
    }

module.exports = db;