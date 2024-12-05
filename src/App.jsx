import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoList from './TodoList'
import AddTodoForm from './AddTodoForm'

function App() {
  const [todoList, setTodoList] = useState([]);
  const [list, setNewTodo] = useState([]);
  /*
      {
        id: 1,
        name : 'create an agreement with utility companies',
      },
      {
        id: 2,
        name : 'change driver license',
      },
      {
        id: 5,
        name : 'meet with friend regarding the work',
      },
      {
        id: 4,
        name : 'Set up an appointment to connest the internet',
      }
  ]);*/
 
  const handleAddTodo = (newTodo) => {
    setTodoList([newTodo, ...list]);
  };
  console.log("todo list="+todoList);

  return (
    <div>
   <h1>Todo List</h1>
      <AddTodoForm onAddTodo={handleAddTodo}/>
      <TodoList /*items={list}*/ todoList={todoList}/>
   </div>
  )
}

export default App
