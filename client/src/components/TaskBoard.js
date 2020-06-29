import DoneCards from './DoneCards.js';
import InProgressCards from './InProgressCards.js';
import Modal from './Modal.js';
import React, { Component } from 'react';
import TaskCard from './TaskCard.js';
import TestingCards from './TestingCards.js';
import TodoCards from './TodoCards.js';

let exampleTaskDb = [{
  assignee: 'John Doe',
  status: 'todo',
  title: 'Fix a small bug',
  type: 'Bug',
  }, {
  assignee: 'Jane Doe',
  status: 'progress',
  title: 'Redesign the homepage UI',
  type: 'Task',
  }, {
  assignee: 'Joe Shmoe',
  status: 'test',
  title: 'Test out new technology',
  type: 'Task',
  }, {
  assignee: 'Josephine Smith',
  status: 'done',
  title: 'Become a pro at React',
  type: 'Task',
  }, {
  assignee: 'Jane Doe',
  status: 'todo',
  title: 'Schedule meeting with design team',
  type: 'Task',
  }, {
  assignee: 'Joe Shmoe',
  status: 'progress',
  title: 'Create functionality for users to sort todos',
  type: 'New Feature',
  }];

class TaskBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allTasks: exampleTaskDb,
      done: [],
      progress: [],
      test: [],
      todo: [],
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.sortTasks = this.sortTasks.bind(this);
  }

  componentDidMount() {
    this.sortTasks();
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
        <Modal />
        <div className="status-block status-block-start">
          <div className="status-title">To Do</div>
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