const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = async () =>{
    await mongoose.connect(process.env.MONGO_URL).then(()=>{
        console.log('connect db')
    }).catch((error)=>{
        console.log(error);
    })
};
module.exports = connectDB;