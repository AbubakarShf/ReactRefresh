import React, { useContext } from 'react'
import Recipe from './Recipe'
import '../components/css/Recipe-list.css'
import { RecipeContext } from './App'

function RecipeList({ recipes }) {
  const { addRecipeHandler } = useContext(RecipeContext)
  return (
    <React.Fragment>
      <div className="recipe-list">
        <div>
          {recipes.map((recipe) => {
            return <Recipe key={recipe.id} {...recipe} />
          })}
        </div>
        <div className="recipe-list__add-recipe-btn-container">
          <button onClick={addRecipeHandler} className="btn btn-primary">
            Add Recipe
          </button>
        </div>
      </div>
    </React.Fragment>
  )
}

export default RecipeList
