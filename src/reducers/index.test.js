import { todos } from './index';
import { addTodo } from '../actions';

describe('The todos reducer', () => {
  it('returns an empty state', () => {
    expect(todos(undefined, {})).toEqual([]);
  });

  it('should handle ADD_TODO', () => {
    const action = addTodo('Hello', 1);
    const expected = [{ id: 1, text: 'Hello', done: false, prompt: false }];
    expect(todos([], action)).toEqual(expected);
  });

  it('should handle TOGGLE_TODO', () => {
    const state = [{ id: 1, text: 'Hello', done: false }];
    const expected = [{ id: 1, text: 'Hello', done: true }]
    expect(todos(state, { type: 'TOGGLE_TODO', id: 1 })).toEqual(expected);
  });
  it('should handle REMOVE_TODO', () => {
    const state = [{ id: 1, text: 'Hello', done: false }];
    const expected = [];
    expect(todos(state, { type: 'REMOVE_TODO', id: 1 })).toEqual(expected);
  });

});
