import React from 'react';
import injectSheet from 'react-jss';
import './App.css';
import AddTodo from './containers/AddTodo';
import TodoListContainer from './containers/TodoListContainer';

const styles = {
  app: {
    width: '100%',
    maxWidth: '640px',
    background: '#ffffff',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0,0,0,.05)',
    margin: '20px',
  },
};

const App = ({ classes }) => (
  <div className={classes.app}>
    <AddTodo />
    <TodoListContainer />
  </div>
);

const StyledApp = injectSheet(styles)(App);

export default StyledApp;
