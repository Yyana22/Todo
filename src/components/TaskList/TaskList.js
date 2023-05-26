import React from 'react'
import Task from '../Task'
import './TaskList.css'
const TodoList = ({arrData}) => {

  const elements = arrData.map((item) => {
    const {id, ...itemProps} = item
    return (
    // <li key={id} className="list-group-item">
    //   <TodoListItem { ...itemProps}/>
    // </li>
    <li className={itemProps.class} key={id}>
        <Task {...itemProps}/>
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