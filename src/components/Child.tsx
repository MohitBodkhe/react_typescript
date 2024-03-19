import React from 'react'

type User = {
  username: string
}

export default function Child(props: User) {
  return (
    <div>
      <h1>{props.username}</h1>
    </div>
  )

}
