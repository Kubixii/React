class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      messageVisibility: false
    }

  }

  render() {
    const text = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia consequuntur deserunt dicta architecto quae, esse sequi quasi ex ipsum voluptatum. Error ipsum omnis quia dicta cum, necessitatibus delectus accusamus dolor."
    return (
      <>
        <button id='button' onClick={this.handleClick.bind(this)} >{this.state.messageVisibility ? 'Ukryj' : 'Pokaż'}</button>
        {this.state.messageVisibility ? <p>{text}</p> : null}
      </>
    )
  }

  handleClick(e) {
    this.setState(prevState => {
      return {
        messageVisibility: !this.state.messageVisibility
      }
    })
  }
}

ReactDOM.render(<App />, document.getElementById('root'))