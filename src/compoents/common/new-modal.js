import React, { useEffect, useState } from 'react';
import { addTodo, updateTodo } from '../../store/reducers/todos/todos-actions';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';

const todoInputInitialValues = {
  id: '',
  title: '',
  desc: '',
  addInfo: '',
  date: '',
};
const NewModal = ({ todoData, onClose }) => {
  const [todoInputData, setTodoInputData] = useState(todoInputInitialValues);
  const dispatch = useDispatch();

  const handleSave = () => {
    if (todoData?.type === 'add') {
      const newTodo = { ...todoInputData, id: Date.now() };
      dispatch(addTodo(newTodo));
      toast.success('Todo added successfully!');
    } else if (todoData?.type === 'edit') {
      dispatch(updateTodo({ ...todoData?.data, ...todoInputData }));
      toast.info('Todo updated successfully!');
    }
    setTodoInputData(todoInputInitialValues);
    onClose();
  };
  useEffect(() => {
    if (todoData?.type === 'edit') {
      setTodoInputData(todoData.data);
    }
  }, [todoData]);

  return (
    !!todoData?.type && (
      <div className='modal-overlay'>
        <div className='custom-modal'>
          <div className='modal-header'>
            <h5 className='modal-title'>
              {todoData?.type === 'add' ? 'Add Todo' : 'Edit Todo'}
            </h5>
            {/* <button
              type='button'
              className='btn btn-secondary'
              onClick={() => onClose()}>
              Close
            </button> */}
          </div>
          <div className='modal-body'>
            <input
              type='text'
              value={todoInputData?.title}
              // defaultValue={todoInputData?.title}
              onChange={(e) =>
                setTodoInputData({ ...todoInputData, title: e.target.value })
              }
            />
            <input
              type='date'
              value={todoInputData?.date}
              onChange={(e) =>
                setTodoInputData({ ...todoInputData, date: e.target.value })
              }
            />
            <input
              type='text'
              placeholder='Description'
              value={todoInputData?.desc}
              disabled={todoData?.type === 'edit'}
              onChange={(e) =>
                setTodoInputData({ ...todoInputData, desc: e.target.value })
              }
            />
            <input
              type='text'
              placeholder='Additional Information'
              value={todoInputData?.addInfo}
              disabled={todoData?.type === 'edit'}
              onChange={(e) =>
                setTodoInputData({ ...todoInputData, addInfo: e.target.value })
              }
            />
          </div>
          <div className='modal-footer'>
            <button
              type='button'
              className='btn btn-secondary'
              onClick={() => onClose()}>
              Close
            </button>
            <button
              type='button'
              className='btn btn-primary'
              onClick={handleSave}>
              {todoData?.type === 'add' ? 'Add' : 'Update'} Todo
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default NewModal;
