import React, { useContext } from 'react';
import { AppContext } from './AppContext';

const Button = () => {
    const { toggleLoggedState, isUserLogged } = useContext(AppContext);
    return (
        <button onClick={toggleLoggedState}>
            {isUserLogged ? "Wyloguj" : "Zaloguj"}
        </button>
    )
}


export default Button