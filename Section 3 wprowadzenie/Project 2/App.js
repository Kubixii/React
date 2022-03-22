class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: "",
      number: 0
    }
  }

  render() {
    return (
      <>
        <button onClick={this.buttonClickHandler.bind(this)}>{this.props.btnTitle}</button>
        <PanelNumberResult number={this.state.number} />
        <PanelTextResult text={this.state.text} />
      </>
    )
  }

  buttonClickHandler() {
    const letter = 'a'
    const numb = Math.floor(Math.random() * 100);
    this.setState(previousState => {
      return {
        text: this.state.text + letter,
        number: numb
      }
    })
  }
}

const PanelNumberResult = (props) => { return <h3>Wylosowana liczba to: {props.number}</h3> }
const PanelTextResult = (props) => { return <h1>{props.text}</h1> }

ReactDOM.render(<App btnTitle='HEHEHEHEHE' />, document.getElementById('root'))