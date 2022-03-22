class Excercise1 extends React.Component {
    state = {
        omens: [
            "pierwsza wróżba",
            "druga wróżba",
            "trzecia wróżba"
        ],
        omen: " "
    }
    render() {
        return (
            <>
                <button onClick={this.showOmen.bind(this)}>Zobacz wróżbę</button>
                <form onSubmit={this.addOmen.bind(this)}>
                    <input type="text" name="omen" />
                    <button type="submit">Dodaj wróżbę</button>
                </form>
                {this.state.omen === " " ? null : <h2>{this.state.omen}</h2>}
            </>
        );
    }

    showOmen() {
        let omen = ""
        const length = this.state.omens.length
        const number = Math.floor(Math.random() * length)
        omen = this.state.omens[number]
        this.setState({
            omen
        })
    }

    addOmen(e) {
        e.preventDefault()
        const omen = e.target.omen.value
        e.target.omen.value = ""
        this.setState(prevState => {
            return {
                omens: prevState.omens.concat(omen)
            }
        })
    }
}