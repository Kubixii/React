class App extends React.Component {
    state = {
        visible: false
    }
    render() {
        return (
            <>
                <button onClick={this.buttonToggle.bind(this)}>{`${this.state.visible ? "Schowaj" : "Pokaż"} zegarek`}</button>
                <br />
                {this.state.visible ? <Clock /> : null}
            </>
        );
    }

    buttonToggle() {
        this.setState({
            visible: !this.state.visible
        })
    }
}

ReactDOM.render(<App />, document.getElementById('root'))