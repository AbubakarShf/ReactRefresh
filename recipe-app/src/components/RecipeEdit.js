import React from 'react'

import IngridentEdit from './IngredientsEdit'
import './css/RecipeEdit.css'

function RecipeEdit() {
  return (
    <div className="Recipe-Edit">
      <div className="recipe-edit__remove-btn-Container">
        <button className="btn recipe-edit__remove-button"> &times; </button>
      </div>
      <div className="recipe-edit__details-grid">
        <label ClassName="recipe-edit__label" htmlFor="Recipe-Name">
          Recipe Name
        </label>
        <input
          className="recipe-edit__input"
          type="text"
          name="Recipe-Name"
          id="Recipe-Name"
        />
        <label ClassName="recipe-edit__label" htmlFor="Cook-Time">
          Cook Time
        </label>
        <input
          className="recipe-edit__input"
          type="text"
          name="Cook-Time"
          id="Cook-Time"
        />
        <label ClassName="recipe-edit__label" htmlFor="Servings">
          Servings
        </label>
        <input
          className="recipe-edit__input"
          type="number"
          name="Servings"
          id="Servings"
        />
        <label ClassName="recipe-edit__label" htmlFor="Instructions">
          Instructions
        </label>
        <textarea
          className="textarea.recipe-edit__input"
          name="Instructions"
          id="Instructions"
        />
      </div>
      <br />
      <label ClassName="recipe-edit__label" htmlFor="Ingredients">
        Ingredients
      </label>
      <div className="recipe-edit__ingridents-grid">
        <div>Name</div>
        <div>Amount</div>
        <div></div>
        <IngridentEdit />
        <IngridentEdit />
      </div>
      <div className="recipe-edit__add-ingreident-btn-container">
        <button className="btn btn-primary">Add Ingredients</button>
      </div>
    </div>
  )
}

export default RecipeEdit
