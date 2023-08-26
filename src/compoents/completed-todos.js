import React from 'react';

// ==================================
import { useDispatch, useSelector } from 'react-redux';
import { removeTodo } from '../store/reducers/todos/todos-actions';
import { toast } from 'react-toastify';

const CompletedTodosComponent = () => {
  const dispatch = useDispatch();
  const { completedTodos } = useSelector((state) => state.todos);

  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id));
    toast.success('Todo deleted successfully!');
  };

  return (
    <div className='mt-5'>
      <div className='row justify-content-center mx-0'>
        <div className='col-lg-9 col-md-10 col-sm-11'>
          <div className='mainCard'>
            <h2 className='text-center mb-3'>Completed Tasks</h2>
            <ul className='taskList p-0'>
              {completedTodos?.length ? (
                completedTodos.map((todo) => (
                  <div>
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
                            className='btn btn-danger'
                            onClick={() => handleRemoveTodo(todo.id)}>
                            Remove
                          </button>
                        </div>
                      </div>
                    </li>
                  </div>
                ))
              ) : (
                <p className='text-center text-secondary'>No completed tasks</p>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompletedTodosComponent;
