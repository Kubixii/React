import React, { Component } from 'react'

const imagesPath = "http://localhost:3000/images/usersProfilePictures/"
class FullScreenUser extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <>
                <button id='return' onClick={this.props.showUsersList}>Powrót</button>
                <h1>{this.props.userData[0].name}</h1>
                <img src={`${imagesPath}${this.props.id}.png`} alt="profile_picture" id='profilePicture' />
                <p>{this.props.userData[0].description}</p>
            </>
        );
    }
}

export default FullScreenUser;