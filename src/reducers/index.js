// @flow

import { combineReducers } from 'redux';
import {
  ADD_TODO,
  TOGGLE_TODO,
  REMOVE_TODO,
  UPDATE_TODO,
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
      return state.map((todo) => {
        if (todo.id === action.id) {
          return Object.assign({}, todo, {
            done: !todo.done,
          });
        }
        return todo;
      });
    case REMOVE_TODO:
      return state.filter(todo => todo.id !== action.id);
    case UPDATE_TODO:
      return state.map((todo) => {
        if (todo.id === action.id) {
          return Object.assign({}, todo, {
            id: action.id,
            text: action.text,
            done: false,
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

