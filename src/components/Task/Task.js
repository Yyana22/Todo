import React from 'react'
import './Task.css'
// {label, important = false},
const Task = (itemProps) => {
    return (
    <div className="view">
        <input className="toggle" type="checkbox"></input>
        <label>
          <span className="description">{itemProps.label}</span>
          <span className="created">created 17 seconds ago</span>
        </label>
        <button className="icon icon-edit"></button>
        <button className="icon icon-destroy"></button>
      </div>
    )
  }

export default Task