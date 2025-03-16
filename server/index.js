const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const contactModel = require('./models/contactModel');

const port = 3000;
const app = express();
const connectionString = 'mongodb://localhost:27017/SAGARNUNIA';
mongoose.connect(connectionString);

app.use(cors());
app.use(express.json());
app.get('/contact', async (req,res) => {
    try{
        const contact = await contactModel.find();
        res.json(contact);
    }catch(err){
        console.log("error occured : ",err);
    }
})
app.listen(port,() => {console.log(`server is listening on port ${port}`)});
 