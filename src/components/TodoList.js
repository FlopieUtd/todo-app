import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Todo from './Todo';

const TodoList = ({
  todos,
  toggleTodo,
  updateTodo,
  toggleRemovalPrompt,
  removeTodo,
}) => (
  <ul>
    <TransitionGroup className="todo-list">
      {todos.map(todo => (
        <CSSTransition
          key={todo.id}
          timeout={{ exit: 350, enter: 600 }}
          classNames="slide"
        >
          <Todo
            {...todo}
            onToggle={() => toggleTodo(todo.id)}
            onUpdate={() => updateTodo(todo.text, todo.id)}
            onRemoveRequest={() => toggleRemovalPrompt(todo.id)}
            onRemoveConfirm={() => removeTodo(todo.id)}
          />
        </CSSTransition>
      ))}
    </TransitionGroup>
  </ul>
);

export default TodoList;
