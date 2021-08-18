import React, { useState, useContext } from 'react'
import { ThemeContext } from '../App'

const Counter = ({ InitiallVal }) => {
  const [state, setState] = useState({ count: InitiallVal })
  const style = useContext(ThemeContext)
  console.log('CounterHook Call')
  return (
    <React.Fragment>
      <div>
        <h1>CounterHook</h1>
        <button
          style={style}
          onClick={() =>
            setState((prevState) => {
              return { count: prevState.count - 1 }
            })
          }
        >
          Dec
        </button>
        <span>{state.count}</span>
        <button
          style={style}
          onClick={() =>
            setState((prevState) => {
              return { count: prevState.count + 1 }
            })
          }
        >
          Inc
        </button>
      </div>
    </React.Fragment>
  )
}
export default Counter
