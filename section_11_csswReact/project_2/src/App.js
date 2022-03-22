import React, { Component } from 'react'
import './App.css'
import Text from './Text'

class App extends Component {

  state = {
    underline: false
  }
  text = "Witaj na stronie"
  render() {

    // let h1Classes = " "
    // if (this.state.underline) h1Classes += " line"
    // if (this.text.length > 10) h1Classes += " big"

    const h1Classes = [];
    if (this.state.underline) h1Classes.push("line")
    if (this.text.length > 10) h1Classes.push("big")

    return (
      <div className="app" onClick={() => this.setState({ underline: !this.state.underline })}>
        <h1 className={h1Classes.join(" ")}>{this.text}</h1>
        <Text />
      </div>
    );
  }
}

export default App;