import React,{useState} from 'react'

export default function Axios() {
    const[name,setName]=useState([]);
    useEffect(()=>{
        axious.get('http://localhost:3001/user')
        .then((res)=>{
            const store=res.data;
            setName(store)
        })
    })   
  return (
    <div>
         <h1>Axios Get</h1>
         {name.map((person)=><li key={person.id}>{person.name}</li>)}
    </div>
  )
}
