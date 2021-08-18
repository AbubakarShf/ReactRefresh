import React, { useState } from 'react'
import Counter from './components/CounterHook'
import CounterHook from './components/Counter'

const App = () => {
  const [theme, setTheme] = useState('red')

  return (
    <React.Fragment>
      <ThemeContext.Provider value={{ backgroundColor: theme }}>
        <Counter InitiallVal={0} />
        <CounterHook InitiallVal={0} />
        <button
          onClick={() =>
            setTheme((prevTheme) => {
              return theme === 'red' ? 'blue' : 'red'
            })
          }
        >
          Toggle Color
        </button>
      </ThemeContext.Provider>
    </React.Fragment>
  )
}

export const ThemeContext = React.createContext()
export default App
