class App extends React.Component {
    state = {
        number: 0,
    }
    render() {
        return (
            <>
                <p>{this.state.number}</p>
                <button onClick={this.noFunctionTest.bind(this)}>Bez funkcji</button>
                <button onClick={this.withFunctionTest.bind(this)}>Z funkcją</button>
                <button onClick={this.IDKTBF.bind(this)}>IDKTBF</button>
                <button onClick={this.reset.bind(this)}>Reset</button>
            </>
        );
    }

    reset() {
        this.setState({
            number: 0
        })
    }

    noFunctionTest() {
        this.setState({
            number: this.state.number + 1
        })

        this.setState({
            number: this.state.number + 2
        })

        this.setState({
            number: this.state.number + 3
        })
    }

    withFunctionTest() {
        this.setState(prevState => {
            return {
                number: prevState.number + 1
            }
        })

        this.setState(prevState => {
            return {
                number: prevState.number + 2
            }
        })

        this.setState(prevState => {
            return {
                number: prevState.number + 3
            }
        })
    }


    IDKTBF() {
        this.setState(prevState => {
            return {
                number: !prevState.number
            }
        })
    }
}

ReactDOM.render(<App />, document.getElementById('root'))