import React from 'react';

import CartPage from './CartPage';
import UserInfo from './UserInfo';
import Login from './Login';
import ItemsPage from './ItemsPage';

import AppProvider from './AppContext';

import './App.css'

const App = () => {
    return (
        <AppProvider>
            <UserInfo />
            <Login />
            <ItemsPage />
            <CartPage />

        </AppProvider>
    );
}
export default App;