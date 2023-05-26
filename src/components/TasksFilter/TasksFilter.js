import React from 'react'
import './TasksFilter.css'


const TasksFilter = () => {
    return (
    <div className="btn-group">
        <button className="btn btn-info btn-all" type="button">All</button>
        <button className="btn btn-outline-secondary btn-active" type="button">Active</button>
        <button className="btn btn-outline-secondary btn-done" type="button">Done</button>
    </div>
    )
}

export default TasksFilter;