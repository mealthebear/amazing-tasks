import React, { Component } from 'react';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="task-modal">
        This is the Modal woohooo!
        <form>
          <label>Task Name</label>
          <input type="text"/>

          <div>
            <label>Type</label>
            <select defaultValue="Task" onChange={(e) => console.log(e.target.value)}>
              <option>Task</option>
              <option>Bug</option>
              <option>New Feature</option>
            </select>
          </div>

          <div>
            <label>Status</label>
            <select defaultValue="To Do" onChange={(e) => console.log(e.target.value)}>
              <option>To Do</option>
              <option>In Progress</option>
              <option>Ready for Testing</option>
              <option>Done</option>
            </select>
          </div>

          <div>
            <label>Assignee</label>
            <select defaultValue="Jane Doe" onChange={(e) => console.log(e.target.value)}>
              <option>Choose here</option>
              <option>Jane Doe</option>
              <option>John Doe</option>
              <option>Joe Shmoe</option>
              <option>Josephine Smith</option>
            </select>
          </div>

          <button type="submit" value="update">Update</button>

        </form>
      </div>
    )
  }
}

export default Modal;