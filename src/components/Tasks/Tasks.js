import React, { useContext } from 'react';

import { TaskContext } from '../../contexts/TaskContext';
import Task from '../Task/Task';

const Tasks = () => {
    const taskContext = useContext(TaskContext);
    const tasks = taskContext.todoList;
    if(tasks.length === 0){
        return <h3>No Task Found.</h3>
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