import React, { createContext, useState } from 'react';


export const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [isUserLogged, setIsUserLogged] = useState(false);

    const toggleLoggedState = () => setIsUserLogged(!isUserLogged);


    return (
        <AppContext.Provider value={{
            isUserLogged,
            toggleLoggedState
        }}>
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;