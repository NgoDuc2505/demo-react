// import React from 'react'

import { useState } from "react"

function Playground() {
    const [number,setNumber] = useState(1)
    const [name,setName] = useState("")

    let realName

    const plusNumber = ()=>{
        let newNum = number + 1;
        setNumber(newNum)
    }
    const setNameOnchange = ()=>{
        setName(realName)
    }

    const getValueOfName = (event)=>{
        realName = event.target.value
    }
  return (
    <div className='React-hook'>
        <h1>{number}</h1>
        <h2>{name}</h2>
        <input type="text" onChange={getValueOfName}/>
        <button type="button" className="btn btn-success" onClick={plusNumber}>click</button>
        <button type="button" className="btn btn-warning" onClick={setNameOnchange}>click2</button>
    </div>
  )
}

export default Playground