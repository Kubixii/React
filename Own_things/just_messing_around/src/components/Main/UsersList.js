import React, { Component } from 'react'
import User from './User'
class UsersList extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <>
                <ul>{this.props.users.map(user => {
                    return (
                        <User key={user.id} id={user.id} name={user.name} desc={user.description} userSelectHandler={this.props.userSelectHandler} />
                    )
                })}
                </ul>
            </>
        );
    }
}

export default UsersList;