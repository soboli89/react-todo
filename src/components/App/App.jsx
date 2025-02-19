import { useState, useEffect } from 'react'
import './App'
import TodoList from '../TodoList'
import AddTodoForm from '../AddTodoForm'
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [todoList, setTodoList] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");
  const URL = `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${import.meta.env.VITE_TABLE_NAME
}`;
  
 useEffect(() => {
    const fetchData = async()=> {
      const options = {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
        }
      }   
      try {
        const response = await fetch(`${URL}?view=Grid%20view&sort[0][field]=title&sort[0][direction]=asc`, options);
        if (!response.ok) {
          const message = `Error: ${response.status}`;
          console.log(message);
        }
        const data = await response.json();
        const todos = data.records.map((todo) =>({
          id: todo.id,
          title: todo.fields.title,  
        }));
        setTodoList(todos);

      } catch (error){
        console.error('Error:', error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
    
  }, []);   


  const sortTodoList = (todos, order) => {
    return [...todos].sort((a, b) => {
      if (a.title && b.title) {
        if (order === 'asc') {
          if (a.title < b.title) {
            return -1;
          } else if (a.title > b.title) {
            return 1;
          } else {
            return 0;
          }
        } else {
          if (a.title < b.title) {
            return 1;
          } else if (a.title > b.title) {
            return -1;
          } else {
            return 0;
          }
        }
      }
      return 0;
    });
  };  

  const handleAddTodo = (newTodo) => {
    const newTodoItem = {
      fields: {
        title:  newTodo.name,
      } 
    }
    const postData = async () => {
      const options = {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
          'Content-Type': 'application/json; charset=utf-8',
        }, 
        body: JSON.stringify(newTodoItem),
      }
      try {
        const response = await fetch(URL, options);
        if (!response.ok) {
          const message = `Ошибка: ${response.status}`;
          const errorDetails = await response.json();
          console.log(message, errorDetails); 
          return;
        }
        const json = await response.json();
        console.log('Post created:', json);
        const addedTodo = { id: json.id, title: json.fields.title}
        setTodoList((prevList) => [addedTodo, ...prevList]);
      } 
      catch (error){
        console.error('Error:', error);
      }  finally {
        setIsLoading(false);
      }
    };
      postData();
    };

    const handleRemove = (item) => {
      const removedId = item.id;
      const deleteData = async()=> {
        const options = {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
          }
        }     
        try {
          const response = await fetch(`${URL}/${removedId}`, options);
          if (!response.ok) {
            const message = `Error: ${response.status}`;
            console.log(message);
          }
          const data = await response.json();
          if(data.id) {
            const updateTodolist = todoList.filter((todo)=> todo.id !== data.id);
            setTodoList(updateTodolist);
          }
        } catch (error){
          console.error('Error:', error);
        } finally {
          setIsLoading(false);
        }
      }
      setIsLoading(true);
      deleteData();
     
    }

    const toggleSort = () =>
      setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"),
    );
    
    const sortedTodoList = sortTodoList(todoList, sortOrder);

    return (
      <BrowserRouter>
        <Routes>
          <Route path='/'
            element={
              <>
                <h1>Todo List</h1>
                  <AddTodoForm addTodo={handleAddTodo}/>
                  <button onClick={toggleSort}>
                    Sort by name {sortOrder === "asc" ? "\u2193" : "\u2191"}
                  </button>
                  {isLoading ? (
                    <p>Loading...</p>
                  ) : (
                    <TodoList todoList={sortedTodoList} onRemove={handleRemove}/>
                  )}
              </>
            }
          /> 
          <Route path ='/new'
            element ={
              <h1>New Todo List</h1>
            }
          />
        </Routes>
      </BrowserRouter>
  )
}


export default App
