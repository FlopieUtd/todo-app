import React from 'react';
import './App.css';
import AddTodo from './containers/AddTodo';
import TodoListContainer from './containers/TodoListContainer';

const App = () => (
  <div className="app">
    <AddTodo />
    <TodoListContainer />
  </div>
);


export default App;
