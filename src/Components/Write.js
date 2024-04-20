import React, { useState } from 'react';
import axios from 'axios';

function Write() {
    const [inputVal, setInput] = useState('');

    const SaveData = async () => {
        console.log('enter')
        try {
            let response= await axios.post('http://localhost:4000/writetodatabase', { content: inputVal })
            console.log(inputVal,response,'11::')
            alert("Data save Succesfully")
            setInput('')
        } catch (error) {
            console.log(error, '11::')
        }
    }

    return (
        <div>
            <input type='text' value={inputVal} onChange={(e) => setInput(e.target.value)} />
            <button onClick={SaveData}>save Data Into Mongo</button>
        </div>
    )
}

export default Write