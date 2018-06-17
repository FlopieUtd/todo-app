import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, toggleTodo, removeTodo }) => (
  <ul>
    {todos.map(todo => (
      <Todo
        key={todo.id}
        {...todo}
        onToggle={() => toggleTodo(todo.id)}
        onRemove={() => removeTodo(todo.id)}
      />
    ))}
  </ul>
);

export default TodoList;
