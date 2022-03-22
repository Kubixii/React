import React from 'react';
import { Provider } from 'react-redux';

import store from './store/store';
import Form from './Form';
import List from './List';

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <div>
          <Form />
          <List />
        </div>
      </Provider>
    </div>
  );
}

export default App;