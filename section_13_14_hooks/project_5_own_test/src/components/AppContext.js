import React, { createContext, useState } from 'react';

import { Items } from './Items.json';

export const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [isUserLogged, setIsUserLogged] = useState(false)
    const [cart, setCart] = useState([])

    const addCartItem = (id) => {
        const newCart = cart.concat(Items[id]);
        setCart(newCart);
    }
    const removeCartItem = (id) => {
        const leftCart = cart.slice(0, id)
        const rightCart = cart.slice(id + 1, cart.length);
        const newCart = leftCart.concat(rightCart);
        console.log(id);
        console.log(newCart);
        setCart(newCart);
    }

    const toggleUserLoginState = () => setIsUserLogged(!isUserLogged);

    return (
        <AppContext.Provider value={{
            isUserLogged,
            cart,
            toggleUserLoginState,
            addCartItem,
            removeCartItem
        }}>
            {children}
        </AppContext.Provider>
    );
}

export default AppProvider;