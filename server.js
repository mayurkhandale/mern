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


app.get('/readfromserver', async (req, res) => {
    const findData = await dataModel.find({})
    //console.log(findData,'2020')
    res.send({ message: 'hey data from server', data: findData })
})
app.delete('/delete/:id', async (req, res) => {
    console.log(req.params, req.body, '00')

    try {
        const findByIdDelete = await dataModel.findByIdAndDelete(req.params.id)
        res.send({ data: findByIdDelete })
    } catch (error) {
        res.status(400).json({ message: error.message })
        console.log(error, '29::')
    }

})

app.put('/update/:id', async (req, res) => {
    console.log(req.params, req.body, 'update');
    try {   
        const user=await dataModel.findByIdAndUpdate(req.params.id,{content:req.body.content},{new:true})
        
        res.status(200).json({message:"content Updated",data:user})
        console.log('try')

    } catch (error) {
        res.status(400).json({error:error.message})
        console.log(error)
    }
})

app.post('/writetodatabase', async (req, res) => {
    try {
        console.log(req.body, '25:')
        const { content } = req.body;
        const newData = new dataModel({ content });
        await newData.save();
        res.json({ message: "data added succesfully" })

    } catch (error) {
        console.log(error.message)
        res.status(500).send('server Data while saving data');
        res.json({ message: "Data saved SuccesFully......." })
    }
})

app.listen(PORT, () => {
    console.log('server is running on port', PORT);

})