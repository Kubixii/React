import React, { Component } from 'react'

class Drzewo extends Component {
    Lista = [["Android", "iOS"], ["starszy", "nowszy"], ["powyżej 600", "poniżej 600"], ["powyżej 6''", "poniżej 6''"], ["OLED", "LCD"], ["bardziej wydajny", "mniej wydajny"], ["pamieć <=128", "pamięć >128"]]
    Pytania = ["Android czy iOS?", "Starszy czy nowszy?", "Powyzej 600 usd?", "Powyzej 6''?", "OLED czy LCD?", "Mniej czy bardziej wydajny?", "pamiec wewnetrzna <=128GB"]
    counter = 0
    constructor(props) {
        super(props);
        this.state = {
            idk: [
                {
                    id: this.counter,
                    yesID: this.counter + 1,
                    noID: this.counter + 2,
                    branch: "start",
                    line: 0,
                    question: null
                }
            ]
        }
    }

    generateTreeBranch(line, yesNO) {
        this.counter++
        const branch = {
            id: this.counter,
            yesID: this.counter + 1,
            noID: this.counter + 2,
            branch: "",
            line,
            question: this.Pytania[line - 1]
        }
        if (yesNO) {
            branch.branch.concat(" " + this.Lista[line][0])
        }
        else {
            branch.branch.concat(" " + this.Lista[line][1])
        }

        if (line > 2) {
            return null
        }
        else {
            const newline = line + 1
            this.generateTreeBranch(newline, true)
            this.generateTreeBranch(newline, false)
            this.setState(prevState => {
                return {
                    idk: prevState.idk.concat(branch)
                }
            })
        }
    }

    componentDidMount() {
        setTimeout(() => { this.generateTreeBranch(1, true) }, 100)
    }
    render() {
        return (
            <>

            </>
        );
    }
}

export default Drzewo;