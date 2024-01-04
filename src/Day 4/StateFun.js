import {useState} from 'react'

function StateFun() 
{
    const[carName]=useState("Mustang")
    const[count,setCount]=useState(0);
    const changeCount=()=>setCount(count+1)
    const deCount=()=>setCount(count-1)
  return (
    <div style={{background:"grey"}}>
           <h1>{carName} since 1979</h1>
           <h2>Count {count}</h2>
           <button onClick={changeCount}>inCount</button>
           <button onClick={deCount}>deCount</button>
    </div>
  )
}
export default StateFun;