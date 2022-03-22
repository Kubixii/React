import React, { useContext } from 'react';

import Item from './Item';

import { AppContext } from './AppContext';

const Cart = () => {
    const { removeCartItem, cart } = useContext(AppContext);

    const CartItemsList = cart.map((item, index) => {
        return (
            <div key={index}>
                <Item
                    name={item.name}
                    description={item.description}
                />
                <button onClick={() => removeCartItem(index)}>Usuń</button>
            </div>
        )
    });
    return (
        <ul>
            {CartItemsList}
        </ul>
    );
}

export default Cart;