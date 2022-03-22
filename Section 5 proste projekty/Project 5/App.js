class App extends React.Component {
    state = {
        city: "",
        description: "",
        isCurrent: false,
        whereWantTo: "Warszawa"
    }
    render() {
        return (
            <>
                <div>
                    <label>
                        Podaj miasto:
                        <input name="city" type="text" value={this.state.city} onChange={this.formInputsHandler.bind(this)} />
                    </label>
                </div>

                <div>
                    <label>
                        Opis:
                        <textarea name="description" onChange={this.formInputsHandler.bind(this)} value={this.state.description}></textarea>
                    </label>
                </div>

                <div>
                    <label >
                        Mieszkasz tu?
                        <input name="isCurrent" type="checkbox" checked={this.state.isCurrent} onChange={this.formInputsHandler.bind(this)} />
                    </label>
                </div>

                <div>
                    <label>
                        Gdzie chcesz mieszkać?
                        <select name="whereWantTo" onChange={this.formInputsHandler.bind(this)} value={this.state.whereWantTo}>
                            <option value="Warszawa">Warszawa</option>
                            <option value="Kraków">Kraków</option>
                            <option value="Poznań" >Poznań</option>
                            <option value="Wrocław" >Wrocław</option>
                            <option value="Bydgoszcz">Bydgoszcz</option>
                        </select>
                    </label>
                </div>
            </>
        );
    }

    formInputsHandler(e) {
        const { name, value, checked, type } = e.target
        if (type === "checkbox") {
            this.setState({
                [name]: checked
            })
        }
        else {
            this.setState({
                [name]: value
            })
        }
    }

    // textInputHandler(e) {
    //     this.setState({
    //         city: e.target.value
    //     })
    // }

    // textareaHandler(e) {
    //     this.setState({
    //         description: e.target.value
    //     })
    // }

    // checkboxHandler(e) {
    //     this.setState({
    //         isCurrent: e.target.checked
    //     })
    // }
    // selectHandler(e) {
    //     this.setState({
    //         whereWantTo: e.target.value
    //     })
    // }
}

ReactDOM.render(<App />, document.getElementById('root'))