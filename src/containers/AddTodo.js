import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

const AddTodo = ({ dispatch }) => {
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
        className="add-todo__form"
      >
        <input
          ref={(node) => { input = node; }}
          placeholder="New todo..."
          className="add-todo__input"
        />
        <button type="submit" className="add-todo__submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default connect()(AddTodo);
