import React from 'react';
import injectSheet from 'react-jss';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

const styles = {
  addTodoInput: {
    padding: '20px',
    border: 'none',
    outline: 'none',
    borderBottom: '1px solid rgba(0,0,0,.1)',
    width: '100%',
    fontFamily: 'Roboto',
    fontSize: '1.2rem',
    background: 'transparent',
    textOverflow: 'ellipsis',
  },
  addTodoSubmit: {
    display: 'none',
  },
};

const AddTodo = ({ dispatch, classes }) => {
  let input;

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (input.value.trim() === '') {
            return;
          }
          dispatch(addTodo(input.value, Date.now()));
          input.value = '';
        }}
      >
        <input
          ref={(node) => { input = node; }}
          placeholder="New todo..."
          className={classes.addTodoInput}
          title="Add a new todo"
        />
        <button type="submit" className={classes.addTodoSubmit}>
          Add
        </button>
      </form>
    </div>
  );
};

const StyledAddTodo = injectSheet(styles)(AddTodo);

export default connect()(StyledAddTodo);
