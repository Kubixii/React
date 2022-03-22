import React, { useContext } from 'react';

import Cart from './Cart';

import { AppContext } from './AppContext';

const CartPage = () => {
    const { isUserLogged } = useContext(AppContext);
    const displayIfUserLogged = isUserLogged ? <Cart /> : null;

    return (
        <>
            <h3>Koszyk</h3>
            {displayIfUserLogged}
        </>
    );
}

export default CartPage;