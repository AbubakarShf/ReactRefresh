import React from 'react'

import IngredientList from './IngredientList'
import '../components/css/Recipe.css'

function Recipe({ id, name, servings, cookTime, Instructions, Ingredients }) {
  return (
    <div className="recipe">
      <div className="recipe__header">
        <h1 className="recipe__title">{name}</h1>
        <div className="recipe__btn_container">
          <button className="btn btn-primary  mr-1">Edit</button>
          <button className="btn btn-danger">Delete</button>
        </div>
      </div>

      <div className="recipe_row">
        <span className="recipe_label">Cook Time: </span>
        <span className="recipe_value">{cookTime}</span>
      </div>

      <div className="recipe_row">
        <span className="recipe_label">Servings: </span>
        <span className="recipe_value">{servings}</span>
      </div>
      <div className="recipe_row">
        <span className="recipe_label">Instructions:</span>
        <span className="recipe_value recipe_value--identied recipe-instructions">
          <br />
          {Instructions}
        </span>
      </div>
      <br />
      <div className="recipe_row">
        <span className="recipe_label">
          Ingredients: <br />
        </span>
        <div className="recipe_value recipe_value--identied recipe-ingridents">
          <IngredientList ingredient={Ingredients} />
        </div>
      </div>
    </div>
  )
}

export default Recipe
