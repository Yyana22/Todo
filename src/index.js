import React from 'react'
import ReactDOM from 'react-dom'
import AppHeader from './components/AppHeader.js'
import TodoList from './components/TodoList.js'
import SearchPanel from './components/SearchPanel.js'

const App = () => {
  const isLog = true;
  const login = <span>Log in</span>
  return (
    <div>
      {isLog ? null : login}
      <AppHeader/>
      <SearchPanel/>
      <TodoList/>
    </div>
  )
}
ReactDOM.render(<App/>, document.getElementById('root'))
//137  3 минута