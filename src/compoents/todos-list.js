import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  completeTodo,
  removeTodo,
} from '../store/reducers/todos/todos-actions';
import { toast } from 'react-toastify';
import NewModal from './common/new-modal';

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
    <div className='row justify-content-center mt-5 mx-0'>
      <div className='col-lg-9 col-md-10 col-sm-11'>
        <div className='row mb-3 align-items-center'>
          <div className='col'>
            <h2 className='m-0'>Add Task</h2>
          </div>
          <div className='col-auto'>
            <button
              type='button'
              className='btn primaryBtn'
              onClick={() => setTodoModalData({ type: 'add', data: '' })}>
              Add Task
            </button>
          </div>
        </div>
        <div className='mainCard'>
          <h2 className='text-center mb-3'>Task List</h2>
          <ul className='taskList p-0'>
            {todos?.length ? (
              todos.map((todo) => (
                <li key={todo.id}>
                  <div className='row'>
                    <div className='col d-flex align-items-center'>
                      <div className='col'>
                        <h4>Title: {todo.title}</h4>
                      </div>
                      <div className='col-auto'>
                        <p className='mb-0 fw-bold'>Date: {todo.date}</p>
                      </div>
                    </div>
                    <div className='col-auto'>
                      <button
                        className='btn btn-info me-2'
                        onClick={() =>
                          setTodoModalData({ type: 'edit', data: todo })
                        }>
                        Edit
                      </button>
                      <button
                        className='btn btn-success me-2'
                        onClick={() => handleCompleteTodo(todo.id)}>
                        Complete
                      </button>
                      <button
                        className='btn btn-danger'
                        onClick={() => handleRemoveTodo(todo.id)}>
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))
            ) : (
              <p className='text-secondary py-5 text-center'>
                You currently don't have any Task
              </p>
            )}
          </ul>
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
