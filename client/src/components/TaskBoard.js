import React from 'react';
import TaskCard from './TaskCard.js';

const TaskBoard = (props) => (
    <div className="task-board">
        <div className="status-block">
            <div className="status-title">To Do</div>
            <div className="tasks">
                <TaskCard />
            </div>
        </div>
        <div className="status-block">
            <div className="status-title">In Progress</div>
            <div className="tasks">
                <TaskCard />
            </div>
        </div>
        <div className="status-block">
            <div className="status-title">Ready for Testing</div>
            <div className="tasks">
                <TaskCard />
            </div>
        </div>
        <div className="status-block">
            <div className="status-title">Done</div>
            <div className="tasks">
                <TaskCard />
            </div>
        </div>
    </div>
)

export default TaskBoard;