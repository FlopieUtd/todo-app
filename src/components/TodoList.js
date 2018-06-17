import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Todo from './Todo';

const TodoList = ({
  todos,
  toggleTodo,
  removeTodo,
  updateTodo,
}) => (
  <ul>
    <TransitionGroup className="todo-list">
      {todos.map(todo => (
        <CSSTransition
          key={todo.id}
          timeout={{ exit: 250, enter: 500 }}
          classNames="slide"
        >
          <Todo
            {...todo}
            onToggle={() => toggleTodo(todo.id)}
            onRemove={() => removeTodo(todo.id)}
            onUpdate={() => updateTodo(todo.text, todo.id)}
          />
        </CSSTransition>
      ))}
    </TransitionGroup>
  </ul>
);

export default TodoList;
