import './App.css';

import React from 'react';
import Test from './test';

interface AppProps {

}

interface AppState {
  name: string;
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = { name: 'React' };
  }
  onClickHandler = () => console.log("HEHE");

  render() {
    const { name } = this.state
    const object = {
      info: name
    }
    return (
      <div>
        <Test onClickHandler={this.onClickHandler} number={5} />
      </div>
    );
  }
}

export default App;
