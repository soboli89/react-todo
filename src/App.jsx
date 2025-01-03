import { useState, useEffect } from 'react'
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
  const handleRemove = (item) => {
    const newList=todoList.filter((todoItem)=> item.id !== todoItem.id);
    setList(newList);
  }

  const [todoList, setList] = useSemiPersistentState();
 
  const handleAddTodo = (newTodo) => {
    setList([newTodo, ...todoList]);
  };
  return (
    <div>
      <h1>Todo List</h1>
        <AddTodoForm addTodo={handleAddTodo}/>
        <TodoList todoList={todoList} onRemove={handleRemove}/>
      </div>
  )
}

export default App
