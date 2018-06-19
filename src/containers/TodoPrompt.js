import React from 'react';
import injectSheet from 'react-jss';
import { connect } from 'react-redux';
import { removeTodo, toggleRemovalPrompt } from '../actions';
import continueSVG from '../assets/icons/continue.svg';
import cancelSVG from '../assets/icons/cancel.svg';

const styles = {
  todoPrompt: {
    position: 'absolute',
    right: 0,
    background: '#404040',
    padding: '15px 20px',
    borderRadius: '5px',
    color: '#ffffff',
    bottom: '72px',
    '&:after': {
      content: '""',
      position: 'absolute',
      width: '12px',
      height: '12px',
      background: '#404040',
      transform: 'rotate(45deg)',
      bottom: '-6px',
      right: '20px',
    },
  },
  todoPromptOptions: {
    marginTop: '10px',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  icon: {
    marginLeft: '10px',
    cursor: 'pointer',
    width: '20px',
    height: '20px',
  },
  displayNone: {
    display: 'none',
  },
};

const TodoPrompt = ({ dispatch, id, classes }) => (
  <div className={classes.todoPrompt}>
    <p>Are you sure you want to delete this todo?</p>
    <div className={classes.todoPromptOptions}>
      <label htmlFor="continue">
        <button id="continue" className={classes.displayNone} onClick={() => { dispatch(removeTodo(id)); }} />
        <img
          src={continueSVG}
          alt="Yes"
          title="Yes"
          className={classes.icon}
        />
      </label>
      <label htmlFor="cancel">
        <button id="cancel" className={classes.displayNone} onClick={() => { dispatch(toggleRemovalPrompt(id)); }} />
        <img
          src={cancelSVG}
          alt="No"
          title="No"
          className={classes.icon}
        />
      </label>
    </div>
  </div>
);

const StyledTodoPrompt = injectSheet(styles)(TodoPrompt);

export default connect()(StyledTodoPrompt);
