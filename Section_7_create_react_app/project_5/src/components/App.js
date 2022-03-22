import React, { Component } from 'react';
import './App.css';
import RequestButton from './RequestButton';
import Users from './Users';

class App extends Component {
  state = {
    users: [],
    users2: [],
    errorMessage: []
  }
  render() {
    return (
      <>
        {/* <RequestButton click={() => this.insertUsers(5)} text={"Pokaż 5 użytkowników"} />
        <RequestButton click={() => this.insertUsers(1)} text={"Dodaj użytkownika"} /> */}
        <RequestButton click={this.showUsers.bind(this)} text={"Pokaż 5 użytkowników"} />
        <RequestButton click={this.addUser.bind(this)} text={"Dodaj użytkownika"} />

        <div id="left">
          {this.state.users.length === 0 ? null : <Users users={this.state.users} />}
        </div>
        <div id="right">
          {this.state.users2.length === 0 ? null : <Users users={this.state.users2} showPicture={true} />}
        </div>
        {this.state.errorMessage.join("___")}
      </>
    );
  }

  showUsers() {
    const API = 'https://randomuser.me/api/?results=5'
    fetch(API)
      .then(response => {
        if (response.ok) {
          return response.json()
        }
        throw Error("BŁĄD")
      })
      .then(data => {
        this.setState({
          users: data.results,
          errorMessage: []
        })
      })
      .catch(error => this.setState({ errorMessage: this.state.errorMessage.concat(error.toString()) }))
  }

  addUser() {
    const API = 'https://randomuser.me/api/?results=1'
    fetch(API)
      .then(response => {
        if (response.ok) {
          return response.json()
        }
        throw Error("BŁĄD")
      })
      .then(data => {
        this.setState({
          users2: this.state.users2.concat(data.results),
          errorMessage: []
        })
      })
      .catch(error => this.setState({ errorMessage: this.state.errorMessage.concat(error.toString()) }))
  }

  insertUsers(usersAmount = 1) {
    const API = 'https://randomuser.me/api/?results=' + usersAmount
    fetch(API)
      .then(response => {
        if (response.ok) {
          return response.json()
        }
        throw Error("BŁĄD")
      })
      .then(data => {
        this.setState({
          users: this.state.users.concat(data.results),
          errorMessage: []
        })
      })
      .catch(error => this.setState({ errorMessage: this.state.errorMessage.concat(error.toString()) }))
  }
}

export default App;