import React, { Component } from 'react'
class User extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <>
                <li>
                    <div onClick={() => this.props.userSelectHandler(this.props.id)}>
                        <h2>{this.props.name}</h2>
                        <p>{this.props.desc}</p>
                    </div>
                </li>
            </>
        );
    }
}

export default User;