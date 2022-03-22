class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Witaj na stronie!</h1>
        <div>
          <NavOpt link="#" textMenu='Główna' />
          <NavOpt link="#" textMenu='Galeria' />
          <NavOpt link="#" textMenu='Informacje' />
          <NavOpt link="#" textMenu='Kontakt' />
        </div>
      </div>
    )
  }
}
class NavOpt extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <>
        <a href={this.props.link}>{this.props.textMenu} </a>
      </>
    )
  }
}
class List extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: []
    }
  }
  render() {
    return (
      <>
        <input type='text' id='tekst' /> <button onClick={this.clickHandle.bind(this)}>Dodaj</button>
        <h3>Lista:</h3>
        <ul>{this.state.list.map(element => <ListElement text={element} />)}</ul>
      </>
    )
  }

  clickHandle() {
    const text = document.getElementById('tekst').value
    document.getElementById('tekst').value = ""
    this.setState(previousState => {
      return {
        list: this.state.list.concat(text)

      }
    })
  }
}

class ListElement extends React.Component {
  render() {
    return <li>{this.props.text}</li>
  }
}

class Main extends React.Component {
  render() {
    return (
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo sed exercitationem
          cupiditate vero odit incidunt quas dolorum eligendi quasi rem aliquid, nam
          nemo! A exercitationem et vitae iure facere adipisci!
        </p>
        <List />
      </div>
    )
  }
}
class Footer extends React.Component {
  render() {
    return (
      <footer>
        <p>Strona przygotowana przez hehe</p>
      </footer>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))