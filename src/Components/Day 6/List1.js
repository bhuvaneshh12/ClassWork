import React from 'react'

export default function List1()
{
    const college=[{id:1,stuName:"Abi",age:20},
    {id:2,stuName:"Bharath",age:20},{id:3,stuName:"Bharath ennum mundri",age:30000}]
   
    const display=college.map((col)=><li key={col.id}>{col.stuName} {col.age} </li>)

    return (
        <div>
            <h1>List of Students</h1>
            {display}
        </div>
    )
}
