const express = require('express');
const mongoose = require('mongoose');
const route = require('./routers/route'); 
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());// d'analyser lees requets json

app.use('/api', route);// utiliser les routes li andna f route w ubdaw fl url b /api

const mongoDBURL = 'mongodb://localhost:27017/brief3';
// Connect to MongoDB
mongoose.connect(mongoDBURL)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('Failed to connect to MongoDB:', err.message);
    }); 
app.listen(7000, () => {
    console.log('Server is running on port 9000');
});
