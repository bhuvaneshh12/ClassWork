import React,{useState} from 'react'
export default function DynamicRen()
{
    const[x]=useState(12)
    return(
        x>10 ? <p>the value is greater than 10</p>:
        <p>The value is less than 10</p>
    )
}