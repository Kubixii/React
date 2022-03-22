import React, { useContext } from 'react';

import { AppContext } from './AppContext';

const UserInfo = () => {

    const { isUserLogged } = useContext(AppContext);
    const UserLoggedInfo = isUserLogged ? "Zalogowany" : "Niezalogowany"
    return (
        <>
            <p>Użytkownik jest {UserLoggedInfo}</p>
        </>
    )
}

export default UserInfo;