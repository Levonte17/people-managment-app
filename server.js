//DEPENDENCIES
const express = require('express');
const mongoose = require('mongoose');

//INITIALIZE
const app = express();
//CONFIG
require('dotenv').config();
const {PORT = 4000, DATABASE_URL} = process.env;
    //Mongoose 
    mongoose.connect(DATABASE_URL);
    mongoose.connection
    .on('connected', () => console.log('Mongoose Connected, Lets Gooo!!'))
//MIDDLEWARE
//ROUTES
app.get('/', (req, res) => {
res.send('Welcome people')
});

//LISTEN
app.listen(PORT, () => {
console.log(`app is listening on port ${PORT}`);
});