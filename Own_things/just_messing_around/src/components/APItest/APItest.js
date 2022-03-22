import React, { Component } from 'react'
class APItest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            errorMessage: null,
            people: []
        }
    }
    render() {
        return (
            <>
                <button onClick={this.ApiButtonHandler.bind(this)}>Zapytanie</button>
                {this.state.errorMessage}
                {this.state.people.length === 0 ? null : <p>{this.state.people[0].name.first} {this.state.people[0].name.last}</p>}
            </>
        );
    }

    ApiButtonHandler() {
        const API = "https://randomuser.me/api"
        fetch(API)
            .then(response => response.json())
            .then(
                JSONdata => {
                    console.log(JSONdata.results)
                    this.setState(prevState => {
                        return {
                            people: prevState.people.concat(JSONdata.results)
                        }
                    })
                },
                err => {
                    const errorMessage = toString(err)
                    console.log(errorMessage)
                    this.setState({
                        errorMessage
                    })
                }
            )
    }
}

export default APItest;