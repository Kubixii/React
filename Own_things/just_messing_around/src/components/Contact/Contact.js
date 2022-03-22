import React, { Component } from 'react'
import { Alphabet } from './Alphabet.json'

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            OGalphabet: props.Alphabet
        }
    }
    render() {
        const { OGalphabet } = this.state
        return (
            <>
                <ul>
                    {
                        OGalphabet.map(i => {
                            return (
                                <li key={i.id}>{i.letter} {i.picked.toString()}</li>
                            )
                        })
                    }
                </ul>
                <button onClick={this.test.bind(this)}>TEST</button>
            </>
        );
    }
    test() {
        // Działa jak powinno
        // muszę utworzyć w callbacku .map() nowy obiekt o zmienionych wartościach
        // i dopiero ten obiekt zwrócić
        // w ten sposób nie odwołuje się do obiektów zawartych w środku obiektu głównego/tablicy obiektów
        // tylko tworzę nowe
        const { OGalphabet } = this.state
        const newAlphabet = OGalphabet.map((i, index) => {
            const yesNo = Math.floor(Math.random() * (2 - 0))
            // console.log(yesNo);
            let test = {
                id: index,
                letter: i.letter,
                picked: false
            }
            if (yesNo === 1) {
                test = {
                    id: index,
                    letter: i.letter,
                    picked: true
                }
            }
            return test
        })
        console.log(newAlphabet)
        this.setState({
            // OGalphabet: newAlphabet
        })
    }
}

export default Contact;