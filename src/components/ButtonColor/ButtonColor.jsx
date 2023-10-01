import React from 'react'

function ButtonColor(props) {
    // console.log(props)
    const colors = ['red','green','blue','yellow','violet','pink']
    const demo =[<button>red</button>,<button>green</button>, <button>blue</button>, <button>yellow</button>, <button>violet</button>,<button>pink</button>]


    const changeColor=(colorName)=>{
        console.log(colorName)
        props.setColorFunct(colorName) 
    }


  return (
    <div>
        {
          colors.map(

            (color ,index)=>{
                return(
                    <button key={index} style={{backgroundColor:`${color}`}} onClick={()=>{changeColor(color)}} >{color}</button>
                    //properties (props)
                )
            }
        )
        }
    </div>
  )
}

export default ButtonColor

