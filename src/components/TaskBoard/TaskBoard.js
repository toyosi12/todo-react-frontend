import React, { useContext } from 'react';

import Tasks from '../Tasks/Tasks';
import './TaskBoard.css';
const TaskBoard = () => {
    return (
        <div className="task-board">
            <Tasks />
        </div>
    );
}
export default TaskBoard;