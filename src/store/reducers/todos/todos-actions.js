import * as actionTypes from './todos-action-types';

export const addTodo = (todo) => {
  return {
    type: actionTypes.ADD_TODO,
    payload: todo,
  };
};

export const completeTodo = (id, completedTodo) => {
  return {
    type: actionTypes.COMPLETE_TODO,
    payload: { id, completedTodo },
  };
};

export const removeTodo = (id) => {
  return {
    type: actionTypes.REMOVE_TODO,
    payload: id,
  };
};

export const updateTodo = (updatedTodo) => {
  return {
    type: actionTypes.UPDATE_TODO,
    payload: updatedTodo,
  };
};
