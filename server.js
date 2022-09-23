//DEPENDENCIES
const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan')
//INITIALIZE
const app = express();
//CONFIG
require('dotenv').config();
const {PORT = 4000, DATABASE_URL} = process.env;
    //Mongoose 
    mongoose.connect(DATABASE_URL);
    mongoose.connection
    .on('connected', () => console.log('Mongoose Connected, Lets Gooo!!'))
// SCHEMA MODEL
const peopleSchema = new mongoose.Schema({
    name: String,
    image: String,
    title: String,
}, {timestamps: true}); //APROX
    //Model
    const People = mongoose.model('People', peopleSchema);

//MIDDLEWARE
app.use(express.json());     //interceptjson
app.use(logger('dev'));
//ROUTES
app.get('/', (req, res) => {
res.send('Welcome people')
});

//LISTEN
app.listen(PORT, () => {
console.log(`app is listening on port ${PORT}`);
});