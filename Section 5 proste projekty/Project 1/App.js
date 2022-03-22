const testMessage = (clicks) => {
  return (
    <>
      <p>tyle razy się nakilkałeś chłopie: {clicks}</p>
    </>
  )
}

class App extends React.Component {
  state = {
    checked: false,
    submitButtonPressed: false,
    clicks: 0
  }
  render() {
    const { checked, submitButtonPressed, clicks } = this.state
    return (
      <>
        <h1>Kup bilet na horror roku!</h1>
        <Form
          clickHandler={this.clickHandler.bind(this)}
          checkboxHandler={this.checkboxHandler.bind(this)}
        />
        {submitButtonPressed ?
          checked ?
            <Message text="Miłego seansu" /> :
            <Message text="Nie możesz zobaczyć tego filmu" />
          : null}

        {testMessage(clicks)}
      </>
    )
  }

  clickHandler(e) {
    e.preventDefault();
    this.setState(() => {
      return {
        submitButtonPressed: true
      }
    })
  }

  checkboxHandler() {
    this.setState(prevState => {
      return {
        submitButtonPressed: false,
        checked: !prevState.checked,
        clicks: prevState.clicks + 1
      }
    })
  }
}

const Form = (props) => {
  return (
    <>
      <form onSubmit={props.clickHandler}>
        <input type='checkbox' id='age' onClick={props.checkboxHandler} />
        <label htmlFor="age"> Mam co najmniej 16 lat</label>
        <br />
        <button type='submit'>Kup Bilet</button>
      </form>
    </>
  )
}

// const Adult = () => (
//   <p>Miłego seansu</p>
// );

// const NotAdult = () => (
//   <p>Nie możesz zobaczyć tego filmu </p>
// );

const Message = (props) => {
  return (
    <p>{props.text}</p>
  )
}
ReactDOM.render(<App />, document.getElementById('root'))