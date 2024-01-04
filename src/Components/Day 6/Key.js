
export default function Key() {
    const Emperor=["Buggy","Luffy","Teach","Shanks"]
    const result=Emperor.map((ani,index)=><li Key={index}>{index}={ani}</li>)
  return (
    <div>
      <ul type="none">
        {result}
      </ul>
    </div>
  )
}