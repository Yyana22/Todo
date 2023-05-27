import React, { useCallback }from 'react'
import './NewTaskForm.css'
const NewTaskForm = () => {
  const autoFocus = useCallback(el => el ? el.focus() : null, [])
    return (
      <div>
        <input className="new-todo" placeholder="What needs to be done?" ref={autoFocus} ></input>
      </div>
    )
  }
  
export default NewTaskForm;