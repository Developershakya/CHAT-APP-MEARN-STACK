const express = require('express');
const mongoose = require('mongoose');
const app = express();
const MONGO_URL =''
main().then(console.log('connect db')).catch();

async function main() {
    
    await mongoose.connect(MONGO_URL);
}
app.listen(3000,()=>{
    console.log('server started');
})
