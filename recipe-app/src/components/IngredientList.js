import React from 'react'

import Ingredient from './Ingredient'

function IngredientList({ ingredient }) {
  return (
    <div>
      {ingredient.map((ingre) => {
        return <Ingredient key={ingre.id} {...ingre} />
      })}
    </div>
  )
}

export default IngredientList
