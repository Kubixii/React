import React, { Component } from 'react';
import './App.css';
import { Data } from './Data.json'

setInterval(() => {
  const index = Data.length + 1
  Data.push({
    id: index,
    title: `Wiadomość numer ${index}`,
    body: `Treść wiadomości numer ${index}...`
  })
}, 1000)

class App extends Component {
  state = {
    comments: [...Data]
  }
  refresh
  render() {
    const messages = this.state.comments.map(message => {
      return (
        <div key={message.id}>
          <h1>{message.title}</h1>
          <p>{message.body}</p>
        </div>
      )
    })
    return (
      <>
        {messages.reverse()}
      </>
    );
  }

  componentDidMount() {
    this.refresh = setInterval(() => this.getData(), 500)
  }

  getData() {
    if (this.state.comments.length !== Data.length) {
      this.setState({
        comments: [...Data]
      })
    }
  }
}

export default App;
