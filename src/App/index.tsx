import React from 'react'
import TodoList from '@components/TodoList'
import './App.css'

function App(): JSX.Element {
  return (
    <div className="App">
      <header className="site-header">Todo App</header>
      <TodoList />
    </div>
  )
}

export default App
