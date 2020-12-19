import React, { useContext } from 'react';

import { TaskContext } from '../../contexts/TaskContext';
import Task from '../Task/Task';

const Tasks = () => {
    const taskContext = useContext(TaskContext);
    const tasks = taskContext.todoList;
    if(tasks.length === 0){
        return <div className="card">
                <div className="card-body">
                    <h5>No Task Found.</h5>
                </div>
            </div>
    }
    return (
        /**
         * Display all tasks
         */
        tasks.map(task => (
            <Task key={task.id} task={task} />
        ))
    );
}

export default Tasks;