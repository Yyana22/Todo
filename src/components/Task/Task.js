import React from 'react'
import './Task.css'
const Task = ({label, important = false}) => {
    const spanStyle = {
        color: important ? 'steelblue' : 'black',
        fontWeight: important ? 'bold' : 'normal'
    }
    return (
    <div className="view">
        <input className="toggle" type="checkbox"></input>
        <label>
          <span className="description">{label}</span>
          <span className="created">created 17 seconds ago</span>
        </label>
        <button className="icon icon-edit"></button>
        <button className="icon icon-destroy"></button>
      </div>
    )
  }

export default Task