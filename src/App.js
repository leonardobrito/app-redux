import React from 'react';
import { Provider } from 'react-redux';
// Required before import store
import './config/reactotron';
import store from './store';

import Routes from './routes/index';

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

export default App;
