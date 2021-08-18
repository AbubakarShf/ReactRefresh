import React, { Component } from 'react'

export default class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: props.InitiallVal,
    }
  }
  render() {
    return (
      <div>
        {console.log('Counter Call')}

        <h1>Counter</h1>
        <button onClick={() => this.changeAmount(-1)}>Dec</button>
        <span>{this.state.count}</span>
        <button onClick={() => this.changeAmount(1)}>Inc</button>
      </div>
    )
  }
  changeAmount(amount) {
    // this.setState({ count: this.state.count + amount })

    //or

    this.setState((prevState) => {
      return { count: prevState.count + amount }
    })
  }
}
