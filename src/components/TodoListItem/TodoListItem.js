import React from 'react'
import './TodoListItem.css'
const TodoListItem = ({label, important = false}) => {
    const spanStyle = {
        color: important ? 'steelblue' : 'black',
        fontWeight: important ? 'bold' : 'normal'
    }
    return (
      <span className="todo-list-item">
      <span
        className="todo-list-item-label"
        style={spanStyle}>
        {label}
      </span>
      <div>
        <button type="button"
                className="btn btn-outline-danger btn-sm float-right">
          <i class="fa fa-trash-o"/>
        </button>
        <button type="button"
                className="btn btn-outline-success btn-sm float-right">
          <i className="fa fa-exclamation" />
        </button>
      </div>
    </span>
    )
  }

export default TodoListItem