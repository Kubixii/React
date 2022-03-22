class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0,
      clicks: 0
    }

    // this.minusButtonHandle = this.minusButtonHandle.bind(this)
    // this.plusButtonHandle = this.plusButtonHandle.bind(this)
    // this.resetButtonHandle = this.resetButtonHandle.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  render() {
    return (
      <>
        {/* <button onClick={this.handleClick}>+1</button>
        <button onClick={this.handleClick}>-1</button>
        <button onClick={this.handleClick}>reset wyniku</button> */}
        <Button
          text="-10"
          number="10"
          operation="substract"
          click={this.handleClick}
        />
        <Button
          text="reset"
          number="0"
          operation="reset"
          click={this.handleClick}
        />
        <Button
          text="+10"
          number="10"
          operation="add"
          click={this.handleClick}
        />
        <Display
          clicks={this.state.clicks}
          counter={this.state.counter}
        />
      </>
    )
  }

  handleClick(type, number = 1) {
    if (type === "substract") {
      this.setState(prevState => {
        return {
          counter: prevState.counter - number,
          clicks: prevState.clicks + 1
        }
      })
    }
    else if (type === "add") {
      this.setState(prevState => {
        return {
          counter: prevState.counter + number,
          clicks: prevState.clicks + 1
        }
      })
    }
    else if (type === "reset") {
      this.setState(prevState => {
        return {
          counter: 0,
          clicks: prevState.clicks + 1
        }
      })
    }
  }

  // plusButtonHandle() {
  //   this.setState(prevState => {
  //     return {
  //       counter: prevState.counter + 1,
  //       clicks: prevState.clicks + 1
  //     }
  //   })
  // }

  // minusButtonHandle() {
  //   this.setState(prevState => {
  //     return {
  //       counter: prevState.counter - 1,
  //       clicks: prevState.clicks + 1
  //     }
  //   })
  // }

  // resetButtonHandle() {
  //   this.setState(prevState => {
  //     return {
  //       counter: 0,
  //       clicks: prevState.clicks + 1
  //     }
  //   })
  // }
}

const Button = (props) => {
  const number = parseInt(props.number)
  return (
    <button onClick={() => props.click(props.operation, number)}>{props.text}</button>
  )
}

const Display = (props) => {
  return (
    <>
      <p>Liczba Kliknięć: {props.clicks}</p>
      <p>Wynik: {props.counter} {props.counter > 40 ? <h4>A żeś się naklikał</h4> : null}</p>
    </>
  )
}
ReactDOM.render(<App />, document.getElementById('root'))