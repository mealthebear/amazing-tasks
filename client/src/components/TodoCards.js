import React from 'react';

const TodoCards = (props) => (
  props.todo.map((card, id) => {
    return <div className="task" key={id}>
      <p>{card.title}</p>
      <p className="task-type">{card.type}</p>
      <p className="assignee">{card.assignee}</p>
    </div>
  })
)

export default TodoCards;