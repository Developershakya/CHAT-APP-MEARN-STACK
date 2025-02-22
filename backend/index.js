const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require('./config/database');

dotenv.config({});
const app = express();
const PORT = process.env.MONGO_URL 

app.listen(3000,()=>{
    connectDB();
    console.log('server started');
})
