import Header from './Header.js';
import React, { Component } from 'react';
import TaskBoard from './TaskBoard.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Header />
        <TaskBoard />
      </div>
    )
  }
}

export default App;