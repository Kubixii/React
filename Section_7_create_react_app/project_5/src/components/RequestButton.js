import React from 'react'

const RequestButton = props => {
    return (
        <button onClick={props.click}>{props.text}</button>
    );
}

export default RequestButton;