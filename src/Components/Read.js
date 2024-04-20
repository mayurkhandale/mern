import React, { useState, useEffect } from 'react'
import axios from 'axios'
function Read() {
  const [serverData, setServerData] = useState('');
  const [flag, setFlag] = useState(false);
  const [inputVal, setInput] = useState('');
  const [update,setUpdate]=useState()
  console.log(serverData, '10::')
  const fetchData = async () => {
    try {
      let response = await axios.get('http://localhost:4000/readfromserver');
      console.log(response, '10::')
      setServerData(response.data?.data)
    } catch (error) {
      console.log('error', error)
    }
  }
  useEffect(() => {
  
    fetchData()

  }, []);
  const handleDelete = (query) => {
    console.log(query, '20::')
    axios.delete(`http://localhost:4000/delete/${query}`).then(res => {
      console.log('response', serverData, res.data?.data._id)
      const filterData = serverData.filter(items => items._id != res.data?.data._id)
      setServerData(filterData)
    }).catch(error => {
      console.log(error, '24::')
    })
  }
  const handleEdit = (obj) => {
    setFlag(true)
    setUpdate(obj);
    setInput(obj.content)
  }
  const updateData =async () => {
  await axios.put(`http://localhost:4000/update/${update._id}`,{content:inputVal}).then(res=>{
    console.log(res,'39::')
     setFlag(false);
     fetchData()

   }).catch(error=>{
     console.log(error,'41::')
   })
  }
  return (
    <div>

      {flag ? <div>

        <input type='text' value={inputVal} onChange={(e) => setInput(e.target.value)} />
        <button onClick={updateData}>update Data Into Mongo</button>
      </div> :
        serverData && serverData.map(items => {
          return <><h1 key={items._id}>{items.content}</h1>
            <button onClick={() => handleDelete(items._id)}>Delete</button>
            <button onClick={() => handleEdit(items)}>Edit</button>
          </>
        })
      }
    </div>
  )
}

export default Read