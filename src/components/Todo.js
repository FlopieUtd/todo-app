import React from 'react';

const Todo = ({
  onToggle,
  onRemove,
  done,
  text,
  id,
}) => (
  <li className={'todo ' + (done ? 'todo--done' : '')}>
    <label 
      className="label label--toggle" 
      htmlFor={`toggle-${id}`}
      title="Toggle done"
    >
      <input
        id={`toggle-${id}`}
        type="checkbox"
        onChange={onToggle}
        className="todo__toggle"
      />
      <img
        src={require('../assets/icons/unchecked.svg')}
        alt="Toggle done"
        className="todo__toggle-icon"
      />
    </label>
    <p className="todo__text">{text}</p>
    <label
      className="label label--remove"
      htmlFor={`remove-${id}`}
      title="Remove"
    >
      <input
        id={`remove-${id}`}
        type="checkbox"
        onChange={onRemove}
        className="todo__remove"
      />
      <img
        src={require('../assets/icons/remove.svg')}
        alt="Remove"
        className="todo__remove-icon"
      />
    </label>

  </li>
);

export default Todo;
