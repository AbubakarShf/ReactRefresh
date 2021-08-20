import React from 'react'

import Ingredient from './Ingredient'
import '../components/css/ingridient-list.css'

function IngredientList({ ingredient }) {
  const ingredientElements = ingredient.map((ingre) => {
    return <Ingredient key={ingre.id} {...ingre} />
  })
  return <div className="ingrident-grid">{ingredientElements}</div>
}

export default IngredientList
