import React from 'react'

export default function Car({carName}) {
    if(carName==="r")
    {
        throw new Error("i am a not sport car")
    }
  return (
    <div>
      {carName}
    </div>
  )
}