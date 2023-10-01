import React from 'react'

function House(props) {
    // console.log(props)
    const colorInProps = props.colorShow
  return (
    <div>
        <h1>
        <i className="fa-solid fa-house" style={{color:`${colorInProps}`}}></i>
        </h1>
    </div>
  )
}

export default House