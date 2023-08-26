import React from 'react';

// ==================================
import { useDispatch, useSelector } from 'react-redux';
import { removeTodo } from '../store/reducers/todos/todos-actions';
import { toast } from 'react-toastify';
import { NavLink } from 'react-router-dom';

const CompletedTodosComponent = () => {
  const dispatch = useDispatch();
  const { completedTodos } = useSelector((state) => state.todos);

  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id));
    toast.success('Todo deleted successfully!');
  };

  return (
    <div>
      <NavLink to='/home'>Home</NavLink>
      <h2>Completed Todos</h2>
      <ul>
        {completedTodos?.length ? (
          completedTodos.map((todo) => (
            <li key={todo.id}>
              <p>Title: {todo.title}</p>
              <p>Date: {todo.date}</p>
              <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
            </li>
          ))
        ) : (
          <p>No completed todos</p>
        )}
      </ul>
    </div>
  );
};

export default CompletedTodosComponent;
