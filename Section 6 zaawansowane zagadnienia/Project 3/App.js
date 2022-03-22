class App extends React.Component {
    state = {
        number: 1,
        multipier: 2
    }
    render() {
        return (
            <>
                <button onClick={this.buttonHandler.bind(this)}>{`Pomnóż przez ${this.state.multipier}`}</button>
                <p>{this.state.number}</p>
            </>
        );
    }


    componentDidUpdate() {
        if (this.state.number > 10000 && this.state.multipier !== 0.5) {
            this.setState(() => {
                return {
                    multipier: 0.5
                }
            })
        }
        else if (this.state.number < 0.005 && this.state.multipier !== 2) {
            this.setState(() => {
                return {
                    multipier: 2
                }
            })
        }
    }

    buttonHandler() {
        this.setState({
            number: this.state.number * this.state.multipier
        })
    }
}

ReactDOM.render(<App />, document.getElementById('root'))