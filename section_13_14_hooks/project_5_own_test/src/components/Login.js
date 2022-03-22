import React, { useContext } from 'react';

import { AppContext } from './AppContext';

const Login = () => {
    const { isUserLogged, toggleUserLoginState } = useContext(AppContext)
    const UserLoggedInfo = isUserLogged ? "Wyloguj" : "Zaloguj";
    return (
        <button onClick={toggleUserLoginState}>
            {UserLoggedInfo}
        </button>
    );
}

export default Login;