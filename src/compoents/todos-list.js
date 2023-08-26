import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  completeTodo,
  removeTodo,
} from '../store/reducers/todos/todos-actions';
import { toast } from 'react-toastify';
import NewModal from './common/new-modal';
import { NavLink } from 'react-router-dom';

function TodoListComponent() {
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.todos);

  const [todoModalData, setTodoModalData] = useState({ type: '', data: '' });

  // =======================================
  const handleCompleteTodo = (id) => {
    const completedTodo = todos.find((todo) => todo.id === id);
    dispatch(completeTodo(id, completedTodo));
    toast.success('Todo completed successfully!');
  };

  // =======================================
  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id));
    toast.success('Todo deleted successfully!');
  };

  return (
    <div className='row justify-content-center'>
      <NavLink to='/completed-todos'>Completed Todos</NavLink>
      <div className='col-lg-9 col-md-10 col-sm-11'>
        <div className='mainCard'>
          <h2 className='text-White'>Task List</h2>
          <ul>
            {todos?.length ? (
              todos.map((todo) => (
                <li key={todo.id}>
                  <p>Title: {todo.title}</p>
                  <p>Date: {todo.date}</p>
                  <button onClick={() => handleCompleteTodo(todo.id)}>
                    Complete
                  </button>
                  <button onClick={() => handleRemoveTodo(todo.id)}>
                    Remove
                  </button>
                  <button
                    onClick={() =>
                      setTodoModalData({ type: 'edit', data: todo })
                    }>
                    Edit
                  </button>
                </li>
              ))
            ) : (
              <p className='text-secondary py-5'>
                You currently don't have any Task
              </p>
            )}
          </ul>

          <div className='text-center'>
            <button
              type='button'
              className='btn primaryBtn'
              onClick={() => setTodoModalData({ type: 'add', data: '' })}>
              Add Task
            </button>
          </div>
          <NewModal
            todoData={todoModalData}
            onClose={() => setTodoModalData({ type: '', data: '' })}
          />
        </div>
      </div>
    </div>
  );
}

export default TodoListComponent;
