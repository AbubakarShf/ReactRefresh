import React from 'react'
import Counter from './components/CounterHook'
import CounterHook from './components/Counter'

const App = () => {
  return (
    <React.Fragment>
      <Counter InitiallVal={0} />
      <CounterHook InitiallVal={0} />
    </React.Fragment>
  )
}

export default App
