class Excercise2 extends React.Component {
    state = {
        people: [
            {
                id: 0,
                name: "Jakub Filipek"
            },
            {
                id: 1,
                name: "Mateusz Filipek"
            },
            {
                id: 2,
                name: "Jan Kowalski"
            },
            {
                id: 3,
                name: "Jan Nowak"
            },
        ]
    }
    render() {
        return (
            <>
                <ul>
                    {this.state.people.map(person => {
                        return (
                            <Person
                                key={person.id}
                                id={person.id}
                                name={person.name}
                                deletePerson={this.deletePerson.bind(this)}
                            />
                        )
                    })}
                </ul>
            </>
        );
    }

    deletePerson(id) {
        let people = this.state.people.filter(person => {
            if (id != person.id) return person
        })
        this.setState({
            people
        })

    }
}

const Person = (props) => {
    const { name, deletePerson, id } = props

    return (
        <>
            <li>{name}<button onClick={() => { deletePerson(id) }}>Usuń</button></li>
        </>
    )
}