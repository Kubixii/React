import React, { Component } from 'react'
import './OnOff.css'
import OnOffButton from './OnOffButton';

class OnOff extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buttons: [
                {
                    id: 0,
                    state: false
                },
                {
                    id: 1,
                    state: false
                },
                {
                    id: 2,
                    state: false
                }
            ],
        }
    }
    render() {
        return (
            <>
                {this.state.buttons.map(button => {
                    return <OnOffButton key={button.id} id={button.id} switch={button.state} click={this.switch.bind(this)} />
                })}
            </>
        );
    }

    switch(e) {
        this.setState(prevState => {
            const buttons = prevState.buttons.map(state => {
                let button =
                {
                    id: state.id,
                    state: state.state
                }
                if (e === state.id) {
                    button.state = !button.state
                }
                return button
            })

            return {
                buttons
            }
        })
    }
}

export default OnOff;