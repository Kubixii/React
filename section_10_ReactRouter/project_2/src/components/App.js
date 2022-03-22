import React, { Component } from 'react'
import { BrowserRouter as Router, } from 'react-router-dom'
import '../css/App.css'
import Header from './Header'
import Navigation from './Navigation'
import Content from './Content'
import Footer from './Footer'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <Router>
        <div id="app">
          <Header />
          <main>
            <Navigation />
            <Content />
          </main>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
