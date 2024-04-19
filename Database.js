require("dotenv").config();
const mongoose=require("mongoose");
const url=process.env.SERVER_MONGODB_URL;


const connectDB=async()=>{
    console.log(url,'7::')
   try{
     await mongoose.connect(url);
     console.log('Succesfully connect with Database');
   }catch(error){
       console.log('hey dude mongo error',error.message)
   }
}

module.exports=connectDB;