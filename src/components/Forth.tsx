import React from 'react'

type Props={
  handle: (e: React.ChangeEvent<HTMLInputElement>) => void
  style: React.CSSProperties
}

export default function Forth({handle}: Props) {
  return (
    <div>
      <input type="text" onChange={handle}></input>
    </div>
  )
}
