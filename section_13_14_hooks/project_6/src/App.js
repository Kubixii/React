import React, { createRef, PureComponent } from 'react';

import Counter from './Counter';

import './App.css';

class App extends PureComponent {

  paragraphElement = createRef();

  state = {
    isCounterVisible: false
  }

  render() {
    const { isCounterVisible } = this.state;

    const toggleCounter = isCounterVisible ? <Counter /> : null

    return (
      <>
        <p ref={this.paragraphElement}>Hello</p>
        <button onClick={this.writeToParagraph}> Kliknij mnie </button>
        <button onClick={this.toggleCounter}>Toggle</button>
        {toggleCounter}
      </>
    );
  }
  toggleCounter = () => this.setState(prevState => ({ isCounterVisible: !prevState.isCounterVisible }));

  writeToParagraph = () => {
    this.paragraphElement.current.textContent += "!"
  }
}

export default App;