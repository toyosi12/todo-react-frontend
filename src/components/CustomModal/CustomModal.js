import { Modal, Input, Button } from 'antd';
import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { ModalContext } from '../../contexts/ModalContext';
import { TaskContext } from '../../contexts/TaskContext';


const CustomModal = () => {
    const modalContext = useContext(ModalContext);
    const taskContext = useContext(TaskContext);
    const modalTitle = (modalContext.modalAction === 'new-task') ? 'New Task' : 'Edit Task';

    const [task, setTask] = useState('');

    useEffect(() => {
      setTask(modalContext.task);
    }, [modalContext.task]);
    
    const handleNewTaskText = (e) => {
      setTask(e.target.value);
    }

    const addNewTask = (e) => {
      e.preventDefault();
      taskContext.addTask(task, modalContext.modalAction);
      modalContext.setModalVisibility(false, '');
    }

    const editTask = (e) => {
      e.preventDefault();
      taskContext.editTask(task);
      modalContext.setModalVisibility(false, '');
    }

    return (
        <Modal
          title={ modalTitle }
          visible={modalContext.modalVisible}
          onCancel={ () => modalContext.setModalVisibility(false, '', '')}
          footer={null}
        >
          <form onSubmit={ modalContext.modalAction === 'new-task' ? addNewTask : editTask }>
            <Input placeholder="Enter Task" className="mb-3" name="task" 
                  onChange={  handleNewTaskText} required value={ task }  />
            <Button htmlType="submit" type="primary" block>Save</Button>
          </form>
        </Modal>
    );
}
export default CustomModal;