import Checkbox from 'antd/lib/checkbox/Checkbox';
import { notification, Popconfirm } from 'antd';

import React, { useContext } from 'react';

import { ModalContext } from '../../contexts/ModalContext';
import { TaskContext } from '../../contexts/TaskContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'

import './Task.css';
const Task = (props) => {
    const modalContext = useContext(ModalContext);
    const taskContext = useContext(TaskContext);

    const deleteTask = (id) => {
        taskContext.deleteTask(id);
    }

    const handleCheckBox = (id, checked) => {
        taskContext.checkTask(id, checked);
    }

    return (
        <div className={ !props.task.completed ? 'card mb-3' : 'card mb-3 completed'}>
            <div className="card-body">
                <div className="row">
                    <div className="col-1"><Checkbox checked={props.task.completed ? true : false} onChange={ (e) => handleCheckBox(props.task.id, e.target.checked) } /></div>
                    <div className="col-9">
                        <h5 className="task-title">{ props.task.task }</h5>
                        <span className="task-time"></span>
                        <span className="task-location"></span>
                    </div>
                    <div className="col-2">
                        <button 
                            className={ !props.task.completed ? 'btn btn-secondary mr-2' : 'btn mr-2 completed'} 
                            type="Edit" onClick={ () => modalContext.setModalVisibility(true, 'edit-task', props.task.task, props.task.id) }><FontAwesomeIcon icon={faEdit} /></button>
                        <Popconfirm placement="topLeft" title="Are you sure?" onConfirm={() => deleteTask(props.task.id)} okText="Yes" cancelText="No">
                            <button 
                                className={ !props.task.completed ? 'btn btn-danger mr-2' : 'btn mr-2 completed'}
                                type="button"><FontAwesomeIcon icon={faTrash} /></button>
                        </Popconfirm>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default Task;