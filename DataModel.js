  //const { type } = require("@testing-library/user-event/dist/type");
const mongoose=require("mongoose");

  const DataSchema=new mongoose.Schema({
    content:{
        type:String,
        required:true
    }
  })

  module.exports=mongoose.model('dataModel',DataSchema);
