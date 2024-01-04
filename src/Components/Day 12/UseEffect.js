import React, { useEffect, useState } from 'react'

function Example(){
        const[count,setCount]=useState(0);
        useEffect(()=>{
            document.title='You Clicked ${count} times';
        });
    
  return (
    <div>
      <p>You Clicked {count} times</p>
      <button onClick={()=>setCount(count+1)}>click me</button>
    </div>
  )
}
export default Example;