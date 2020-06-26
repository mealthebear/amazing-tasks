import React from 'react';

const TaskBoard = (props) => (
    <div className="task-board">
        <div className="status-block">
            <div className="status-title">To Do</div>
            <div className="tasks">
                <div>Beat Mark Zuckerberg in a Coding Challenge (Assigned to John Doe)</div>
            </div>
        </div>
        <div className="status-block">
            <div className="status-title">In Progress</div>
            <div className="tasks">
                <div>Get good at React (Assigned to John Doe)</div>
            </div>
        </div>
        <div className="status-block">
            <div className="status-title">Ready for Testing</div>
            <div className="tasks">
                <div>Banana-inator 3000 Prototype (Assigned to John Doe)</div>
            </div>
        </div>
        <div className="status-block">
            <div className="status-title">Done</div>
            <div className="tasks">
                <div>Watch Cat Videos on YouTube (Assigned to John Doe)</div>
            </div>
        </div>
    </div>
)

export default TaskBoard;