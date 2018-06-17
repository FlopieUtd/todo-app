// @flow

import { combineReducers } from 'redux';
import {
  ADD_TODO,
  TOGGLE_TODO,
} from '../actions/index';

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            done: !todo.done,
          });
        }
        return todo;
      });
    default:
      return state;
  }
}

const todoApp = combineReducers({
  todos,
});

export default todoApp;

