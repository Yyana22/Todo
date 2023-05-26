import './App.css'
import AppHeader from '../AppHeader'
import TodoList from '../TodoList'
import SearchPanel from '../SearchPanel'

const App = () => {

    const todoData = [
      {label: 'qw1', important: false, id: 1},
      {label: 'qw12', important: true, id: 2},
      {label: 'qw123', important: false, id: 3},
    ]
  
    return (
      <div className="main">
        <AppHeader />
        <SearchPanel />
        <TodoList arrData={todoData}/>
      </div>
    )
  }

export default App