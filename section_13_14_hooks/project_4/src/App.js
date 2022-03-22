import React from 'react';

import UserInfo from './UserInfo';
import Button from './Button';

import AppProvider from './AppContext';

import './index.css';

const App = () => {


  return (
    <div>
      <AppProvider >
        <UserInfo />
        <Button />
      </AppProvider>
    </div>
  )
}

export default App;
