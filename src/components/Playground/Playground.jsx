// import React from 'react'

import { useState } from "react"
import House from "../House/House"



function Playground( props ) {
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
    const setProps=()=>{
        let newNum = props.number +1
        props.setIncrease(newNum)
    }
    
  return (
    <div className='React-hook'>
        <h1>{number}</h1>
        <input type="text" onChange={getValueOfName}/>
        <button type="button" className="btn btn-success" onClick={plusNumber}>click</button>
        <button type="button" className="btn btn-warning" onClick={setNameOnchange}>click2</button>
        <button type="button" className="btn btn-warning" onClick={setProps}>click Props</button>
        <House colorShow={props.colorShow}/>
    </div>
  )
}

export default Playground