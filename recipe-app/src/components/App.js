import React from 'react'

import RecipeList from './RecipeList'
import '../components/css/app.css'

const App = () => {
  return (
    <div>
      <RecipeList recipes={sampleRecipes} />
    </div>
  )
}

export default App

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
