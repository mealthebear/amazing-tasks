import React from 'react';

const TaskBoard = (props) => (
    <div className="task-board">
        <div className="status-block">
            <div className="status-title">To Do</div>
            <div className="tasks">
                <div className="task">
                    <p>Beat Mark Zuckerberg in a Coding Challenge</p>
                    <p className="task-type">Task</p><span>John Doe</span>
                </div>
            </div>
        </div>
        <div className="status-block">
            <div className="status-title">In Progress</div>
            <div className="tasks">
                <div className="task">
                    <p>Get good at React</p>
                    <p className="task-type">Task</p><span>John Doe</span>
                </div>
            </div>
        </div>
        <div className="status-block">
            <div className="status-title">Ready for Testing</div>
            <div className="tasks">
                <div className="task">
                    <p>Banana-inator 3000 Prototype</p>
                    <p className="task-type">Task</p><span>John Doe</span>
                </div>
            </div>
        </div>
        <div className="status-block">
            <div className="status-title">Done</div>
            <div className="tasks">
                <div className="task">
                    <p>Watch Cat Videos on YouTube</p>
                    <p className="task-type">Task</p><span>John Doe</span>
                </div>
            </div>
        </div>
    </div>
)

export default TaskBoard;