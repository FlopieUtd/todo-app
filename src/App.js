import React, { Component } from 'react';
import './App.css';
import AddTodo from './containers/AddTodo';
import TodoListContainer from './containers/TodoListContainer';

class App extends Component {
  state = {}

  render() {
    return (
      <div className="app">
        <AddTodo />
        <TodoListContainer />
      </div>
    );
  }
}

export default App;
