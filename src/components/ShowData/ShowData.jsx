import React from 'react'
import ShowDetail from '../ShowDetail/ShowDetail'

function ShowData(properties) {
    // console.log(properties)
  return (
    <div>
        <h1>{properties.tang}</h1>
        <ShowDetail tang2={properties.tang}/>
    </div>

  )
}

//props
//useState

export default ShowData