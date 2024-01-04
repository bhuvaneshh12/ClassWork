import React, { useState } from 'react'

export default function TwoWayBinding () {
   
const[name,setName]=useState("")
const changeName=(event)=>setName(event.target.value)
    return (
      <div>TwoWayBinding
        <input onChange={changeName} value={name}></input>
        <p>the name is{name}</p>
      </div>
    )
  
}
