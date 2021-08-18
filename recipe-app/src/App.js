import React from 'react'
import RecipeList from './components/RecipeList'

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
  },
  {
    id: 2,
    name: 'Pulao',
  },
]
