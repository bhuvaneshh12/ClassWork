import React, { useState } from 'react'

export default function StateObject() 
{
   const[Movie,setMovie]=useState({cname:"Berlin",cid:2023})
   const changeMovie=()=>setMovie({cname:"Money Heist",cid:"2022"})
    return (
      <div>
        <h1>Movie name {Movie.cname}</h1>
        <h1> release Date {Movie.cid}</h1>
        <button onClick={changeMovie}>Click</button>
        
      </div>
    ) 
}
