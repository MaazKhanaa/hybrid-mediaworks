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
        <form onSubmit={handleSave}>
          <div className='custom-modal'>
            <div className='modal-header'>
              <h5 className='modal-title'>
                {todoData?.type === 'add' ? 'Add Task' : 'Edit Task'}
              </h5>
              {/* <button
              type='button'
              className='btn btn-secondary'
              onClick={() => onClose()}>
              Close
            </button> */}
            </div>
            <div className='modal-body'>
              <div className='row'>
                <div className='col-md-6'>
                  <div className='form-group mb-3'>
                    <label className='form-label'>
                      Task Name<span className='text-danger'>*</span>
                    </label>
                    <input
                      type='text'
                      required
                      className='form-control'
                      placeholder='Enter task name'
                      value={todoInputData?.title}
                      // defaultValue={todoInputData?.title}
                      onChange={(e) =>
                        setTodoInputData({
                          ...todoInputData,
                          title: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>

                <div className='col-md-6'>
                  <div className='form-group mb-3'>
                    <label className='form-label'>
                      Due Date<span className='text-danger'>*</span>
                    </label>
                    <input
                      type='date'
                      required
                      className='form-control'
                      value={todoInputData?.date}
                      onChange={(e) =>
                        setTodoInputData({
                          ...todoInputData,
                          date: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>

                <div className='col-md-6'>
                  <div className='form-group mb-3'>
                    <label className='form-label'>
                      Description<span className='text-danger'>*</span>
                    </label>
                    <input
                      type='text'
                      required
                      className='form-control'
                      placeholder='Description'
                      value={todoInputData?.desc}
                      disabled={todoData?.type === 'edit'}
                      onChange={(e) =>
                        setTodoInputData({
                          ...todoInputData,
                          desc: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='form-group mb-3'>
                    <label className='form-label'>
                      Additional Information
                      <span className='text-danger'>*</span>
                    </label>
                    <input
                      type='text'
                      required
                      className='form-control'
                      placeholder='Additional Information'
                      value={todoInputData?.addInfo}
                      disabled={todoData?.type === 'edit'}
                      onChange={(e) =>
                        setTodoInputData({
                          ...todoInputData,
                          addInfo: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='modal-footer'>
              <button
                type='button'
                className='btn secondaryBtn me-3'
                onClick={() => {
                  onClose();
                  setTodoInputData(todoInputInitialValues);
                }}>
                Close
              </button>
              <button type='submit' className='btn primaryBtn'>
                {todoData?.type === 'add' ? 'Add' : 'Update'} Task
              </button>
            </div>
          </div>
        </form>
      </div>
    )
  );
};

export default NewModal;
