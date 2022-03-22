class App extends React.Component {
  state = {
    text: ""
  }
  render() {
    return (
      <>
        <input value={this.state.text} type="text" onChange={this.inputHandler.bind(this)} /><button onClick={this.resetButton.bind(this)}>Reset</button>
        <h1>{this.state.text.toUpperCase()}</h1>
      </>
    )
  }

  resetButton() {
    this.setState({
      text: ""
    })
  }

  inputHandler(e) {
    this.setState({
      text: e.target.value
    })
  }
}
ReactDOM.render(<App btnTitle='HEHEHEHEHE' />, document.getElementById('root'))