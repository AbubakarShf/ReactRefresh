import { useState } from 'react'
import { ThemeContext } from '../App'

const Counter = ({ InitiallVal }) => {
  const [state, setState] = useState({ count: InitiallVal })
  console.log('CounterHook Call')
  return (
    <ThemeContext.Consumer>
      {(style) => (
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
      )}
    </ThemeContext.Consumer>
  )
}
export default Counter
