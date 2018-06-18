import React from 'react';
import { connect } from 'react-redux';
import { removeTodo, toggleRemovalPrompt } from '../actions';

const TodoPrompt = ({ dispatch, id }) => (
  <div className="todo-prompt">
    <p>Are you sure you want to delete this todo?</p>
    <div className="todo-prompt__options">
      <label htmlFor="continue">
        <button id="continue" onClick={() => { dispatch(removeTodo(id)); }} />
        <img
          src={require('../assets/icons/continue.svg')}
          alt="Yes"
          title="Yes"
          className="icon"
        />
      </label>
      <label htmlFor="cancel">
        <button id="cancel" onClick={() => { dispatch(toggleRemovalPrompt(id)); }} />
        <img
          src={require('../assets/icons/cancel.svg')}
          alt="No"
          title="No"
          className="icon"
        />
      </label>
    </div>
  </div>
);

export default connect()(TodoPrompt);
