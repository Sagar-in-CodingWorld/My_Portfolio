const mongoose = require('mongoose');

//Definining the Contact Schema

const contactSchema = new mongoose.Schema({
    email: String,
    Linkdin: String,
    Github: String
})

const contactModel = mongoose.model('contact', contactSchema)
module.exports = contactModel; 