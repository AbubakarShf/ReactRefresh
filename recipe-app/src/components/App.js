import React, { useState } from 'react'

import { v4 as uuid } from 'uuid'
import RecipeList from './RecipeList'
import '../components/css/app.css'

const App = () => {
  const [recipe, setRecipes] = useState(sampleRecipes)
  // Add Recipe Function
  const addRecipeHandler = () => {
    const newRecipe = {
      id: uuid(),
      name: 'new dish',
      servings: 1,
      cookTime: '1:00',
      Instructions: '1.Add Something',
      Ingredients: [{ id: uuid(), name: 'salt', amount: '1Tbs' }],
    }
    setRecipes([...recipe, newRecipe])
    console.log(newRecipe)
  }
  //Delete Recipe Function
  const delRecipeHandler = (Id) => {
    setRecipes(
      recipe.filter((reci) => {
        return reci.id !== Id
      })
    )
  }

  return (
    <div>
      <RecipeList
        recipes={recipe}
        addRecipeHandler={addRecipeHandler}
        delRecipeHandler={delRecipeHandler}
      />
    </div>
  )
}

const sampleRecipes = [
  {
    id: 1,
    name: 'Biryani',
    servings: 3,
    cookTime: '1:45',
    Instructions:
      '\n  1.Put Salt on Chicken\n 2.Put Chicken on Oven\n 3.Eat Chicken\n',
    Ingredients: [
      {
        id: 1,
        name: 'chicken',
        amount: '2 kg',
      },
      {
        id: 2,
        name: 'salt',
        amount: '2 Tbs',
      },
    ],
  },
  {
    id: 2,
    name: 'BeefPulao',
    servings: 2,
    cookTime: '1:00',
    Instructions: '1.Put Salt on Beef\n 2.Put Beef on Oven\n 3.Eat Beef\n',
    Ingredients: [
      {
        id: 1,
        name: 'Beef',
        amount: '2 kg',
      },
      {
        id: 2,
        name: 'salt',
        amount: '2 Tbs',
      },
    ],
  },
]

export default App
