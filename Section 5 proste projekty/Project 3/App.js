const Data = {
  users: [
    {
      id: 0,
      age: 21,
      name: "Jakub",
      sex: "male"
    },
    {
      id: 1,
      age: 53,
      name: "Zosia",
      sex: "female"
    },
    {
      id: 2,
      age: 45,
      name: "Grzesiek",
      sex: "male"
    }
  ]
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users: this.props.data.users
    }
  }

  render() {
    return (
      <>
        <button onClick={this.Filter.bind(this, null)} >Pokaż wszyskich</button>
        <button onClick={this.Filter.bind(this, "female")} >Pokaż kobiety</button>
        <button onClick={this.Filter.bind(this, "male")} >Pokaż mężczyzn</button>
        {this.state.users.map(user => {
          return (
            <User contents={user} key={user.name} />
          )
        })}
      </>
    )
  }

  // ShowAll() {
  //   this.setState({
  //     users: this.props.data.users
  //   })
  // }

  // ShowWomen() {
  //   const users = this.props.data.users
  //   this.setState({
  //     users: users.filter(user => {
  //       return user.sex == "female"
  //     })
  //   })
  // }
  // ShowMen() {
  //   const users = this.props.data.users
  //   this.setState({
  //     users: users.filter(user => {
  //       return user.sex == "male"
  //     })
  //   })
  // }

  Filter(filterType) {
    const users = this.props.data.users
    if (filterType) {
      this.setState({
        users: users.filter(user => {
          return user.sex === filterType
        })
      })
    }
    else {
      this.setState({
        users: users
      })
    }
  }
}

const User = (props) => {
  return (
    <>
      <h2>{props.contents.name}</h2>
      <p>Informacje o użytkowniku</p>
      <p>{"wiek użytkownika" + props.contents.age}</p>
    </>
  )
}

ReactDOM.render(<App data={Data} />, document.getElementById('root'))