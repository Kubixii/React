import React, { Component } from 'react'
import UsersList from './UsersList';
import FullScreenUser from './FullScreenUser';
import '../../css/Main.css'
import { users } from '../Data.json'

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userFullscreen: false,
            userId: 0,
            userData: null
        }
    }
    render() {
        return (
            <>
                {this.state.userFullscreen ?
                    <FullScreenUser
                        id={this.state.userId}
                        userData={this.state.userData}
                        showUsersList={this.showUsersList.bind(this)}
                    />
                    :
                    <UsersList
                        users={users}
                        userSelectHandler={this.userSelectHandler.bind(this)}
                    />}
            </>
        );
    }

    userSelectHandler(userId) {
        const userData = users.filter(user => {
            return user.id === userId
        })
        this.setState({
            userFullscreen: true,
            userId: userId,
            userData
        })
    }

    showUsersList() {
        this.setState({
            userFullscreen: false,
            userId: 0,
            userData: null
        })
    }
}

export default Main;