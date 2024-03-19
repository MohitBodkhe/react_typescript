import React, { Children } from 'react'

type confirmProps = {
  status: 'sucess' | 'error'
  children: React.ReactNode
  }


export default function Third({status, children} : confirmProps) {
  return (
    <div>
      <h1>{status}</h1>
      <h4>{children}</h4>
    </div>
  )
}
