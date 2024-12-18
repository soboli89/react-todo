import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoList from './TodoList'
import AddTodoForm from './AddTodoForm'

function useSemiPersistentState () {
  const [todoList, setList] = useState(() => {
      const savedTodoList = JSON.parse(localStorage.getItem('todoList'));
    return savedTodoList ? savedTodoList : [];
  });
 
  useEffect(()=> localStorage.setItem('todoList', JSON.stringify(todoList)),[todoList]); 
  return [todoList, setList];
}

function App() {
  
  const [todoList, setList] = useSemiPersistentState();
 
  const handleAddTodo = (newTodo) => {
    setList([newTodo, ...todoList]);
  };
  return (
    <div>
      <h1>Todo List</h1>
        <AddTodoForm addTodo={handleAddTodo}/>
        <TodoList todoList={todoList}/>
      </div>
  )
}

export default App
