// @flow

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const TOGGLE_REMOVAL_PROMPT = 'TOGGLE_REMOVAL_PROMPT';
export const REMOVE_TODO = 'REMOVE_TODO';

export function addTodo(text: string, id: number) {
  return { type: ADD_TODO, text, id };
}

export function toggleTodo(id: number) {
  return { type: TOGGLE_TODO, id };
}

export function updateTodo(text: string, id: number) {
  return { type: UPDATE_TODO, text, id };
}

export function toggleRemovalPrompt(id: number) {
  return { type: TOGGLE_REMOVAL_PROMPT, id };
}

export function removeTodo(id: number) {
  return { type: REMOVE_TODO, id };
}

