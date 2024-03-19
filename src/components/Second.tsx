import React from 'react'
interface personProps{
  person:{
  firstName: string,
  lastName: string
  }[]
}

export default function Second(props: personProps) {
  return (
    <div>
      <h1>{props.person.map((per)=>(<h1>{per.firstName}</h1>))}</h1>
    </div>
  )
}
