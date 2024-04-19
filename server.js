const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const dataModel = require("./DataModel");
const connectDB = require("./Database");

connectDB();

const app = express()
app.use(express.json({ extended: false }));

const cors = require("cors");
app.use(cors());
const PORT = process.env.PORT || 5000;


app.get('/readfromserver', (req, res) => {
    console.log('get')
    res.send({ message: 'hey man from server' })
})


app.post('/writetodatabase', async (req, res) => {
    try {
         console.log(req.body,'25:')
        const {content}=req.body;
        const newData=new dataModel({content});
        await newData.save();
        res.json({message:"data added succesfully"})

    } catch (error) {
        console.log(error.message)
        res.status(500).send('server Data while saving data');
        res.json({message:"Data saved SuccesFully......."})
    }
})

app.listen(PORT, () => {
    console.log('server is running on port', PORT);

})