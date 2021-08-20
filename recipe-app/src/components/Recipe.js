import React from 'react'

import IngredientList from './IngredientList'

function Recipe({ id, name, servings, cookTime, Instructions, Ingredients }) {
  return (
    <React.Fragment>
      <div>
        <h1>{name}</h1>
        <div>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </div>
      <div>
        <span>
          Cook Time: <br /> {cookTime}
        </span>

        <span>
          Servings: <br /> {servings}
        </span>
        <span>
          Instructions: <br /> {Instructions}
        </span>
        <br />
        <span>
          Ingredients: <br />
        </span>
        <IngredientList ingredient={Ingredients} />
      </div>
    </React.Fragment>
  )
}

export default Recipe
