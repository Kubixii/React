import React from 'react'

const Users = props => {
    return (
        <ul>
            {props.users.map((user, index) => {
                return <User key={index} name={user.name} city={user.location.city} email={user.email} picture={props.showPicture ? user.picture.medium : false} />
            })}
        </ul>
    );
}

export default Users;

const User = (props) => {
    const { name, city, email, picture } = props
    return (
        <li>
            <div>
                {picture ? <img src={picture} alt="profile" /> : null}
                <h2>{`${name.title} ${name.first} ${name.last}`}</h2>
                <h4>{city}</h4>
                <h5>{email}</h5>
            </div>
        </li>
    )
}