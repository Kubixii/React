import React from 'react';

const Item = ({ name, description }) => {
    return (
        <li>
            <span>Nazwa: {name} </span>
            <span>Opis: {description}</span>
        </li>
    );
}

export default Item;