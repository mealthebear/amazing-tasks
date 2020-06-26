import React from 'react';

const TaskCard = (props) => (
  <div className="task">
    <p>Fix a small bug</p>
    <p className="task-type">Bug</p><p className="assignee">John Doe</p>
  </div>
)

export default TaskCard;