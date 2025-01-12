import { useState, useEffect } from 'react'
import './App.css'
import TodoList from './TodoList'
import AddTodoForm from './AddTodoForm'


function App() {
  
  const handleRemove = (item) => {
    const newList=todoList.filter((todoItem)=> item.id !== todoItem.id);
    setList(newList);
  }
const [isLoading, setisLoading] = useState(true);
const [todoList, setList] = useState();


useEffect(() => {
  const fetchDAta = async()=> {
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
      }
    }
    const URL = `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${import.meta.env.VITE_TABLE_NAME}`;
    
    try {
      const response = await fetch(URL, options);
      if (!response.ok) {
        const message = `Error: ${response.status}`;
        console.log(message);
      }
      const data = await response.json();
      const todos = data.records.map((todo) =>({
           id: todo.id,
          title: todo.fields.title,  
      }));
      setList(todos);
      setisLoading(false);
    } catch (error){
      console.error('Error:', error);
      setisLoading(false);
    }
  }
  
  fetchDAta();
}, []);

const handleAddTodo = (newTodo) => {
    setList([newTodo, ...todoList]);
  };
  return (
    <div>
      <h1>Todo List</h1>
        <AddTodoForm addTodo={handleAddTodo}/>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <TodoList todoList={todoList} onRemove={handleRemove}/>
        )}
        
      </div>
  )
}

export default App
