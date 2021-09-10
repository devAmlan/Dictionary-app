import axios from 'axios'
import React, { useState } from 'react'
const Dictonary = () => {
    const [engword,setEngword] = useState(null)
    const [worderror,setWorderror] = useState(null)
    const [meaning, setMeaning] = useState(null)
    const getMeaning = ()=>{
        axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${engword}`)
        .then(resp=>{
        const wordmeaning = resp.data[0].meanings[1].definitions[0].definition;
         setMeaning(wordmeaning)
        })
        .catch(err=>{
        console.log(err)
        setWorderror("You entered a wrong word")
        })
    }

    return ( 
    <>
    <div className="wordform">
        <input type="text" onChange={(e)=>{setEngword(e.target.value)}}/>
        <button onClick={getMeaning}>Get Meaning</button>
    </div>
    <div className="result">
       {meaning}
    </div>
    {worderror}
    </>
     );
}
 
export default Dictonary;