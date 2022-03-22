import React, { Component } from 'react';
import Word from './Word';
import './App.css';

class App extends Component {
  state = {
    data: [],
    dataLoaded: false
  }
  render() {
    const words = this.state.data.map(word => {
      return <Word key={word.id} pl={word.pl} en={word.en} />
    })

    return (
      <>
        <h1>Fetching</h1>
        <h5>Data fetched from a .json file</h5>
        {this.state.dataLoaded ? null : <img src="http://localhost:3000/loading.gif" alt="loading" />}
        <ul>{words}</ul>
      </>
    );
  }

  componentDidMount() {
    setInterval(() => this.fetchData(), 3000)
  }

  fetchData = () => {
    fetch('http://localhost:3000/data.json')
      .then(response => response.json())
      .then(data => {
        this.setState({
          data: data.words,
          dataLoaded: true
        })
      })
  }
}

export default App;
