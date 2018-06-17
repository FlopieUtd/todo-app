import React from 'react';

const Todo = ({
  onToggle,
  onRemove,
  onUpdate,
  done,
  text,
  id,
}) => {
  let input;
  let submit;

  return (
    <li className={'todo ' + (done ? 'todo--done' : '')}>
      <div className="todo__content">
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
          {done ?
            <img
              src={require('../assets/icons/checked.svg')}
              alt="Toggle done"
              className="todo__toggle-icon"
            />
          : <img
            src={require('../assets/icons/unchecked.svg')}
            alt="Toggle done"
            className="todo__toggle-icon"
          />
          }
        </label>
        <form
          className="todo__update-form"
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
            className="todo__update-input"
            ref={(node) => { input = node; }}
            onBlur={() => { submit.click(); }}
            title="Edit todo"
          />
          <button
            type="submit"
            ref={(node) => { submit = node; }}
            className="todo__update-submit"
          />
        </form>
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
      </div>
    </li>
  );
};

export default Todo;
