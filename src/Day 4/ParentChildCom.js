function Parent()
{
    return(
        <div>
            <h1>Parent component</h1>
            <Child res={1000}/>
        </div>
    )
}

function Child(props)
{
    return(
        <div>
            <h1>Child component</h1>
            <h1>The value is {props.res}</h1>
        </div>
    )
}
export default Parent;