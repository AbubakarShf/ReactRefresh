import { useState } from 'react'

const Counter = ({ InitiallVal }) => {
  const [state, setState] = useState({ count: InitiallVal })
  console.log('CounterHook Call')
  return (
    <div>
      <h1>CounterHook</h1>
      <button
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
        onClick={() =>
          setState((prevState) => {
            return { count: prevState.count + 1 }
          })
        }
      >
        Inc
      </button>
    </div>
  )
}
export default Counter
