import React from 'react'
import TodoListItem from '../TodoListItem'
import './TodoList.css'
const TodoList = ({arrData}) => {

  const elements = arrData.map((item) => {
    const {id, ...itemProps} = item
    return (
    <li key={id} className="list-group-item">
      <TodoListItem { ...itemProps}/>
                      {/* label={item.label}
                      important={item.important} ==> {...item} */}
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