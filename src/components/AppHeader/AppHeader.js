import React from 'react'
import './AppHeader.css'
import NewTaskForm from '../NewTaskForm'
const AppHeader = () => {
    return (
      <div className="app-header">
        <h1>todos</h1>
        <NewTaskForm/>
      </div>
    )
  }

export default AppHeader