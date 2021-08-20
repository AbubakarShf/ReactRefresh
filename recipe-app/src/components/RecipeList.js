import React from 'react'
import Recipe from './Recipe'
import '../components/css/Recipe-list.css'

function RecipeList({ recipes, addRecipeHandler, delRecipeHandler }) {
  return (
    <div className="recipe-list">
      <div>
        {recipes.map((recipe) => {
          return (
            <Recipe
              key={recipe.id}
              {...recipe}
              delRecipeHandler={delRecipeHandler}
            />
          )
        })}
      </div>
      <div className="recipe-list__add-recipe-btn-container">
        <button onClick={addRecipeHandler} className="btn btn-primary">
          Add Recipe
        </button>
      </div>
    </div>
  )
}

export default RecipeList
