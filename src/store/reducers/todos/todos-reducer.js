import * as actionTypes from './todos-action-types';

// ===================================
const initialState = {
  todos: [],
  completedTodos: [],
};

// ===================================
const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case actionTypes.COMPLETE_TODO:
      const { id } = action.payload;
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== id),
        completedTodos: [...state.completedTodos, action.payload.completedTodo],
      };
    case actionTypes.REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
        completedTodos: state.completedTodos.filter(
          (todo) => todo.id !== action.payload
        ),
      };
    case actionTypes.UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id ? action.payload : todo
        ),
      };
    default:
      return state;
  }
};

export default todosReducer;
