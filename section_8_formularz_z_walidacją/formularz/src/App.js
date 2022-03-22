import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    checkbox: false,
    formSubmitted: false,
    errors: {
      username: false,
      email: false,
      password: false,
      checkbox: false,
    }
  }

  errorMessage = {
    usernameError: "Pole nie powinno zawierać spacji",
    emailError: 'Adres email powinien zawierać znak "@", podaj prawidłowy adres',
    passwordError: "Hasło powinno zawierać conajmniej 8 znaków",
    checkboxError: "Zgoda nie została wyrażona"
  }
  render() {
    const { username, email, password, checkbox, errors, formSubmitted } = this.state
    return (
      <>
        <p>Formularz</p>
        <form onSubmit={this.handleFormSubmit.bind(this)} noValidate >
          <label htmlFor="imie">Podaj imię:  </label>
          <input type="text" value={username} id="username" name="username" onChange={this.inputStateChangeHandler.bind(this)} />
          {errors.username ? <span>{this.errorMessage.usernameError}</span> : null}

          <label htmlFor="email">Podaj email: </label>
          <input type="email" value={email} id="email" name="email" onChange={this.inputStateChangeHandler.bind(this)} />
          {errors.email ? <span>{this.errorMessage.emailError}</span> : null}

          <label htmlFor="password">Podaj hasło: </label>
          <input type="password" value={password} id="password" name="password" onChange={this.inputStateChangeHandler.bind(this)} />
          {errors.password ? <span>{this.errorMessage.passwordError}</span> : null}
          <br />
          <input type="checkbox" name="checkbox" id="checkbox" checked={checkbox} onChange={this.inputStateChangeHandler.bind(this)} />
          <label htmlFor="checkbox">Zapoznałem się z regulaminem użytkowania</label>
          {errors.checkbox ? <span>{this.errorMessage.checkboxError}</span> : null}
          <br />
          <input type="submit" value="Wyślij" />
          {formSubmitted ? <p>Formularz wysłany</p> : null}
        </form>
      </>
    );
  }

  inputStateChangeHandler(e) {
    const name = e.target.name
    let value = e.target.value
    if (e.target.type === "checkbox") value = e.target.checked
    this.setState({
      [name]: value
    })
  }

  handleFormSubmit(e) {
    e.preventDefault()
    let errors = {
      username: false,
      email: false,
      password: false,
      checkbox: false,
    }
    let errorsAmount = 0;
    const username = e.target.username.value
    const email = e.target.email.value
    const password = e.target.password.value
    const checkbox = e.target.checkbox.checked

    if (!checkbox) {
      errorsAmount++
      errors.checkbox = true
    }
    if (username.indexOf(" ") !== -1 || username === "") {
      errorsAmount++
      errors.username = true
    }
    if (email.indexOf("@") === -1 || email === "") {
      errorsAmount++
      errors.email = true
    }
    console.log(password.length)
    if (password.length <= 8) {
      errorsAmount++
      errors.password = true
    }

    if (errorsAmount === 0) {
      this.setState({
        username: "",
        email: "",
        password: "",
        checkbox: false,
        formSubmitted: true,
        errors: {
          username: false,
          email: false,
          password: false,
          checkbox: false,
        }
      })
    }
    else {
      this.setState({
        errors
      })
    }
  }
}

export default App;
