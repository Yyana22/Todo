import React from 'react'
import Task from '../Task'
import './TaskList.css'
const TodoList = ({ arrData }) => {
  const elements = arrData.map((item) => {
    const { id, ...itemProps } = item
    if(itemProps.class === 'editing'){
      return (
        <li className={itemProps.class} key={id}>
        <Task {...itemProps} />
        <input type="text" className="edit" defaultValue="Editing task"/>
        </li>
      ) 
    }
    return (
      <li className={itemProps.class} key={id}>
        <Task {...itemProps} />
      </li>
    )
  })
  //1310 - recansellation алгоритм
  return (
    <ul className="list-group todo-list">
      {elements}
    </ul>
  )
}

export default TodoList