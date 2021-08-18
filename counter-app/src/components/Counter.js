import React, { Component } from 'react'
import { ThemeContext } from '../App'

export default class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: props.InitiallVal,
    }
  }
  render() {
    return (
      <ThemeContext.Consumer>
        {(style) => (
          <div>
            {console.log('Counter Call')}

            <h1>Counter</h1>
            <button style={style} onClick={() => this.changeAmount(-1)}>
              Dec
            </button>
            <span>{this.state.count}</span>
            <button style={style} onClick={() => this.changeAmount(1)}>
              Inc
            </button>
          </div>
        )}
      </ThemeContext.Consumer>
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
