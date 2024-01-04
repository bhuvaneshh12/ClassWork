import React, {usestate} from 'react'
export default function PostAxios() {
    const[name,setName]=useState(' ');
    const handleChange=(event)=>{setName(event.target.value)}
    const handleSubmit=(even)=>{
        event.preventDefault();
        axious.post('http://localhost:3001/user',{name})
        .then(res=>{
            console.log(res.date)
        })
    }
    return (
        <div>
            <h1>
                Axious Pos</h1>
                <form onSubmit={handleSubmit}>
                    <input type='text' value={name} onChange={handleChange}></input>
                    <button type='submit'>Submit</button>
                </form>
                </div>
    )
}
