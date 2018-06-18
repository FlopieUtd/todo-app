import React from 'react';
import injectSheet from 'react-jss';
import TodoPrompt from '../containers/TodoPrompt';

const styles = {
  todo: {
    position: 'relative',
    listStyle: 'none',
    justifyContent: 'space-between',
    borderBottom: '1px solid rgba(0,0,0,.1)',
  },
  todoDone: {
    extend: 'todo',
    '& $todoUpdateInput': {
      textDecoration: 'line-through',
    },
    '& $todoUpdateForm, & $labelToggle': {
      opacity: '.3',
    },
  },
  todoContent: {
    display: 'flex',
    alignItems: 'center',
    padding: '20px',
  },
  label: {
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
  },
  labelToggle: {
    extend: 'label',
    transition: 'all .3s ease-out',
    marginRight: '20px',
  },
  todoUpdateForm: {
    transition: 'all .3s ease-out',
    marginRight: '20px',
    flex: '0 1 100%',
  },
  todoUpdateInput: {
    width: '100%',
    border: 'none',
    outline: 'none',
    fontFamily: 'Roboto, sans-serif',
    fontSize: '1.2rem',
    color: '#404040',
    background: 'transparent',
    textOverflow: 'ellipsis',
  },
  todoUpdateSubmit: {
    display: 'none',
  },
  icon: {
    width: '20px',
    height: '20px',
  },
  toggleTodo: {
    display: 'none',
  },
  removeTodo: {
    display: 'none',
  },
};

const Todo = ({
  onToggle,
  onUpdate,
  onRemoveRequest,
  done,
  text,
  id,
  prompt,
  classes,
}) => {
  let input;
  let submit;

  return (
    <li className={(done ? classes.todoDone : classes.todo)}>
      {prompt ?
        <TodoPrompt id={id} />
        : null}
      <div className={classes.todoContent}>
        <label
          className={classes.labelToggle}
          htmlFor={`toggle-${id}`}
          title="Toggle done"
        >
          <input
            id={`toggle-${id}`}
            type="checkbox"
            onChange={onToggle}
            className={classes.toggleTodo}
          />
          {done ?
            <img
              src={require('../assets/icons/checked.svg')}
              alt="Toggle done"
              className={classes.icon}
            />
          : <img
            src={require('../assets/icons/unchecked.svg')}
            alt="Toggle done"
            className={classes.icon}
          />
          }
        </label>
        <form
          className={classes.todoUpdateForm}
          onSubmit={(e) => {
            e.preventDefault();
            if (input.value.trim() === '') {
              return;
            }
            onUpdate();
            input.blur();
          }}
        >
          <input
            type="text"
            defaultValue={text}
            className={classes.todoUpdateInput}
            ref={(node) => { input = node; }}
            onBlur={() => { submit.click(); }}
            title="Edit todo"
          />
          <button
            type="submit"
            ref={(node) => { submit = node; }}
            className={classes.todoUpdateSubmit}
          />
        </form>
        <label
          className={classes.label}
          htmlFor={`remove-${id}`}
          title="Remove"
        >
          <input
            id={`remove-${id}`}
            type="checkbox"
            onChange={onRemoveRequest}
            className={classes.removeTodo}
          />
          <img
            src={require('../assets/icons/remove.svg')}
            alt="Remove"
            className={classes.icon}
          />
        </label>
      </div>
    </li>
  );
};

const StyledTodo = injectSheet(styles)(Todo);

export default StyledTodo;
