class App extends React.Component {
    state = {
        seconds: 0,
        started: false
    }
    render() {
        return (
            <>
                {this.state.seconds} {this.state.miliseconds}
                <br />
                <button onClick={this.toggle.bind(this)}>{this.state.started ? "Stop" : "Start"}</button>
                <br />
                {this.state.started ? <StopWatch
                    addSecond={this.addSecond.bind(this)}
                    reset={this.reset.bind(this)}
                /> : null}
            </>
        );
    }

    toggle() {
        this.setState({
            started: !this.state.started
        })
    }

    addSecond() {
        this.setState({
            seconds: this.state.seconds + 1
        })
    }

    reset() {
        this.setState({
            seconds: 0
        })
    }
}

ReactDOM.render(<App />, document.getElementById('root'))