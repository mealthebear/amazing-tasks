import React from 'react';
import TaskCard from './TaskCard.js';

const TaskBoard = (props) => (
    <div className="task-board">
        <div className="status-block status-block-start">
            <div className="status-title">To Do</div>
                <TaskCard />
        </div>
        <div className="status-block">
            <div className="status-title">In Progress</div>
                <TaskCard />
        </div>
        <div className="status-block">
            <div className="status-title">Ready for Testing</div>
                <TaskCard />
        </div>
        <div className="status-block status-block-end">
            <div className="status-title">Done</div>
                <TaskCard />
        </div>
    </div>
)

export default TaskBoard;