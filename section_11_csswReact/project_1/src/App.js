import React, { Component } from 'react'


class App extends Component {
  state = {
    active: false
  }
  styleON = {
    padding: 2 + "%",
    backgroundColor: "aquamarine",
    cursor: "pointer",
    width: 20 + "%"
  }
  styleOFF = {
    padding: 2 + "%",
    backgroundColor: "gray",
    cursor: "pointer",
    width: 30 + "%"
  }

  render() {
    return (
      <>
        <button onClick={this.buttonHandler.bind(this)} style={this.state.active ? this.styleON : this.styleOFF}>{this.state.active ? "Wyłącz" : "Włącz"}</button>
      </>
    );
  }

  buttonHandler() {
    this.setState(prevState => {
      return {
        active: !prevState.active
      }
    })
  }
}

export default App;
