import DoneCards from './DoneCards.js';
import InProgressCards from './InProgressCards.js';
import React, { Component } from 'react';
import TaskCard from './TaskCard.js';
import TestingCards from './TestingCards.js';
import TodoCards from './TodoCards.js';

let exampleCard = {
  assignee: 'John Doe',
  status: 'todo',
  title: 'Fix a small bug',
  type: 'Bug',
};

class TaskBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allTasks: [exampleCard],
      done: [],
      progress: [],
      test: [],
      todo: [],
    };
    this.sortTasks = this.sortTasks.bind(this);
  }

  sortTasks() {
    let doneTasks = [];
    let progressTasks = [];
    let testTasks = [];
    let todoTasks = [];

    for (let iterator = 0; iterator < this.state.allTasks.length; iterator++) {
      let currentTask = this.state.allTasks[iterator];
      if (currentTask.status === 'done') {
        doneTasks.push(currentTask);
      } else if (currentTask.status === 'progress') {
        progressTasks.push(currentTask);
      } else if (currentTask.status === 'test') {
        testTasks.push(currentTask);
      } else {
        todoTasks.push(currentTask);
      }
    }

    this.setState({
      done: doneTasks,
      progress: progressTasks,
      test: testTasks,
      todo: todoTasks,
    })
  }

  render() {
    return (
      <div className="task-board">
        <div className="status-block status-block-start">
          <div className="status-title" onClick={this.sortTasks}>To Do</div>
            <TodoCards todo={this.state.todo} />
        </div>
        <div className="status-block">
          <div className="status-title">In Progress</div>
            <InProgressCards progress={this.state.progress} />
        </div>
        <div className="status-block">
          <div className="status-title">Ready for Testing</div>
            <TestingCards test={this.state.test} />
        </div>
        <div className="status-block status-block-end">
          <div className="status-title">Done</div>
            <DoneCards done={this.state.done} />
        </div>
      </div>
    )
  }
}

export default TaskBoard;