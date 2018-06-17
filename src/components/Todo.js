import React from 'react';

const Todo = ({ onClick, done, text }) => (
  <li>
    <input
      type="checkbox"
      onChange={onClick}
    />
    {text} {done ? 'done' : 'not done'}
  </li>
);

export default Todo;
