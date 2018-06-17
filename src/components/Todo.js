import React from 'react';

const Todo = ({
  onToggle,
  onRemove,
  done,
  text,
}) => (
  <li>
    Check:
    <input type="checkbox" onChange={onToggle} />
    Remove:
    <input type="checkbox" onChange={onRemove} />
    {text} {done ? 'done' : 'not done'}
  </li>
);

export default Todo;
