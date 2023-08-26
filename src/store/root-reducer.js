import { combineReducers } from 'redux';

// ====================== Reducers ======================
import todosReducer from './reducers/todos/todos-reducer';

// =========================================
export const rootReducer = combineReducers({
  todos: todosReducer,
});
