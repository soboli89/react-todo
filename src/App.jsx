import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoList from './TodoList'
import AddTodoForm from './AddTodoForm'

function App() {
  const [todoList, setTodoList] = useState([]);
  const [list, setNewTodo] = useState([]);
 
  const handleAddTodo = (newTodo) => {
    setTodoList([newTodo, ...todoList]);
  };
  return (
    <div>
      <h1>Todo List</h1>
        <AddTodoForm addTodo={handleAddTodo}/>
        <TodoList /*items={list}*/ todoList={todoList}/>
      </div>
  )
}

export default App
