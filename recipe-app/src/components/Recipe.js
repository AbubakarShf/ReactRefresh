import React from 'react'

function Recipe({ id, name }) {
  return (
    <div>
      <h1>{id}</h1>
      <h1>{name}</h1>
    </div>
  )
}

export default Recipe
