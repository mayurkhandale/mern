import React ,{useState,useEffect}from 'react'
import axios from 'axios'
function Read() {
  const [serverData,setServerData]=useState('');

  useEffect(()=>{
    const fetchData=async()=>{
      try{
         let response=await axios.get('http://localhost:5000/readfromserver');
         console.log(response,'10::')
      }catch(error){
         console.log('error',error)
      }
    }
    fetchData()

  },[]);

  return (
    <div>
        HIIIIIIIIIIIIIIIIIIIIIIII
    </div>
  )
}

export default Read