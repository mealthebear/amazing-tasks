import React, { Component } from 'react';
import TaskCard from './TaskCard.js';
import TodoCards from './TodoCards.js';

let exampleCard = {
    title: 'Fix a small bug',
    type: 'Bug',
    assignee: 'John Doe'
};

class TaskBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: [exampleCard],
            inProgress: [exampleCard],
            testing: [exampleCard],
            done: [exampleCard],
        };
    }

    render() {
        return (
            <div className="task-board">
                <div className="status-block status-block-start">
                    <div className="status-title">To Do</div>
                        <TodoCards todo={this.state.todo} />
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
    }
}

export default TaskBoard;