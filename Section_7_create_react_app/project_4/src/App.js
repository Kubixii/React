import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    Data: [],
    Photos: []
  }
  render() {
    return (
      <>
        <UsersList data={this.state.Data} />
        <Gallery photos={this.state.Photos} />
      </>
    );
  }

  componentDidMount() {
    this.loadData()
    // this.loadPhotos()
  }

  loadData() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', "https://jsonplaceholder.typicode.com/users", true)
    xhr.onload = () => {
      if (xhr.status === 200) {
        const Data = JSON.parse(xhr.response)
        this.setState({
          Data
        })
      }
    }
    xhr.send(null)
  }
  loadPhotos() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', "https://jsonplaceholder.typicode.com/photos", true)
    xhr.onload = () => {
      if (xhr.status === 200) {
        const Photos = JSON.parse(xhr.response)
        this.setState({
          Photos
        })
      }
    }
    xhr.send(null)
  }
}

export default App;

const UsersList = props => {
  const Users = props.data.map(user => {
    return (
      <div id='usersList' key={user.id}>
        <User
          name={user.name}
          username={user.username}
          city={user.address.city}
        />
      </div>
    )
  })
  return (
    <>
      {Users}
    </>
  )
}

const User = props => {
  return (
    <div>
      <h1>{`Imię: ${props.name}`}</h1>
      <h3>{`Nick: ${props.username}`}</h3>
      <h5>{`Miasto: ${props.city}`}</h5>
    </div>
  )
}

const Gallery = props => {
  const photos = props.photos.map(photo => {
    return (
      <Photo
        key={photo.id}
        url={photo.thumbnailUrl}
      />
    )
  })

  return (
    <>
      {photos}
    </>
  )
}

const Photo = props => {
  return (
    <>
      <img src={props.url} alt="thumbnail" />
    </>
  )
}
