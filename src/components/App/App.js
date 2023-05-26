import './App.css'
import AppHeader from '../AppHeader'
import TaskList from '../TaskList'

const App = () => {

    const todoData = [
      {label: 'Completed task', important: false, id: 1, class: 'completed'},
      {label: 'Editing task', important: true, id: 2, class: 'editing'},
      {label: 'Active task', important: false, id: 3, class: null},
    ]
  
    return (
      <div className="todoapp">
        <AppHeader />
        <section className="main">
          <TaskList arrData={todoData}/>
        </section>
      </div>
    )
  }

export default App