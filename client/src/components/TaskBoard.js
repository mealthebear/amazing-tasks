import React from 'react';

const TaskBoard = (props) => (
    <div className="task-board">
        <div className="status-block">
            <div className="status-title">To Do</div>
            <div className="tasks">
                <div>Beat Mark Zuckerberg in a Coding Challenge</div>
            </div>
        </div>
        <div className="status-block">
            <div className="status-title">In Progress</div>
            <div className="tasks">
                <div>Get good at React</div>
            </div>
        </div>
        <div className="status-block">
            <div className="status-title">Ready for Testing</div>
            <div className="tasks">
                <div>Banana-inator 3000 Prototype</div>
            </div>
        </div>
        <div className="status-block">
            <div className="status-title">Done</div>
            <div className="tasks">
                <div>Watch Cat Videos on YouTube</div>
            </div>
        </div>
    </div>
)

export default TaskBoard;