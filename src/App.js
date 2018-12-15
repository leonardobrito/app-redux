import React from 'react';
import { Provider } from 'react-redux';
// Required before import store
import './config/reactotron';
import store from './store';
import TodoList from './TodoList';

const App = () => (
  <Provider store={store}>
    <TodoList />
  </Provider>
);

export default App;
