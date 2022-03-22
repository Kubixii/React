import React, { Component } from 'react';
import './App.css'
import StopWatch from './Stopwatch'
import Laps from './Laps'

class App extends Component {
  state = {
    number: 0,
    stopwatchRunning: false,
    laps: [],
  }
  render() {
    const { stopwatchRunning, number, laps, lap } = this.state
    return (
      <>
        <div id='controls'>
          <button onClick={this.reset.bind(this)}>RESET</button><br />
          <button onClick={this.stopWatchToggle.bind(this)}>{stopwatchRunning ? "Stop" : "Start"}</button><br />
          <button onClick={this.recordLap.bind(this)}>Lap</button>
        </div>
        <p>{this.state.number}</p>
        {stopwatchRunning ? < StopWatch number={number} run={this.run.bind(this)} /> : null}
        <Laps laps={laps} />
      </>
    );
  }
  reset() {
    this.setState({
      number: 0,
      stopwatchRunning: false,
      laps: [],
    })
  }
  stopWatchToggle() {
    this.setState({
      stopwatchRunning: !this.state.stopwatchRunning
    })
  }
  recordLap() {
    this.setState({
      laps: this.state.laps.concat(this.state.number),
    })
  }
  run() {
    this.setState({
      number: this.state.number + 1
    })
  }
}

export default App;