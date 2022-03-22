import React, { Component } from 'react'
import { Prompt } from 'react-router-dom'
import '../../css/Pages/Contact.css'

class Contact extends Component {
    state = {
        formMessage: ""
    }

    render() {
        return (
            <div id="contact">
                <h3>Napisz do nas!</h3>
                <form onSubmit={this.subtmiHandler.bind(this)}>
                    <textarea name="messageContents" placeholder="wpisz wiadomość..." value={this.state.formMessage} onChange={this.formHandler.bind(this)}>
                    </textarea>
                    <button type="submit">Wyśij</button>
                </form>
                <Prompt when={this.state.formMessage !== "" ? true : false} message="Czy na pewno chcesz opuścić strone?" />
            </div>
        );
    }

    formHandler(e) {
        const formMessage = e.target.value;
        this.setState({
            formMessage
        })
    }

    subtmiHandler(e) {
        e.preventDefault()
        this.setState({
            formMessage: ""
        })
    }
}

export default Contact;