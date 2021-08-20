import React, { useState, useEffect } from 'react'

import { v4 as uuid } from 'uuid'
import RecipeList from './RecipeList'
import '../components/css/app.css'

//Context Api
export const RecipeContext = React.createContext()
const LOCAL_STORAGE_KEY = 'CookingWithReact.Recipe'
const App = () => {
  const [recipe, setRecipes] = useState(sampleRecipes)
  //Get Object from LocalStorage
  useEffect(() => {
    const localStorageRecipes = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (localStorageRecipes != null) {
      setRecipes(JSON.parse(localStorageRecipes))
    }
  }, [])

  //Insert Object in LocalStorage
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipe))
  }, [recipe])

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
  }
  //Delete Recipe Function
  const delRecipeHandler = (Id) => {
    setRecipes(
      recipe.filter((reci) => {
        return reci.id !== Id
      })
    )
  }

  //RecipeContext Value
  const RecipeContextValue = {
    addRecipeHandler,
    delRecipeHandler,
  }

  return (
    <React.Fragment>
      <RecipeContext.Provider value={RecipeContextValue}>
        <RecipeList recipes={recipe} />
      </RecipeContext.Provider>
    </React.Fragment>
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
