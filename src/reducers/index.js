// @flow

import { combineReducers } from 'redux';
import {
  ADD_TODO,
  TOGGLE_TODO,
  UPDATE_TODO,
  TOGGLE_REMOVAL_PROMPT,
  REMOVE_TODO,
} from '../actions/index';

type Todo = {
  id: Number,
  text: String,
  prompt: Number,
  done: Boolean,
}

export function todos(state: Array<Object> = [], action: any) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          done: false,
          prompt: false,
        },
      ];
    case TOGGLE_TODO:
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, done: !todo.done };
        }
        return todo;
      });
    case TOGGLE_REMOVAL_PROMPT:
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, prompt: !todo.prompt };
        }
        return todo;
      });
    case REMOVE_TODO:
      return state.filter(todo => todo.id !== action.id);
    case UPDATE_TODO:
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, text: action.text };
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

