import { useState, useEffect } from 'react'
import './App'
import TodoList from '../TodoList'
import AddTodoForm from '../AddTodoForm'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';


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
        console.log("data="+data);
        const todos = data.records.map((todo) =>({
          id: todo.id,
          title: todo.fields.title,  
          completedAt: todo.fields.completedAt,
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
        completedAt: false
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

      // Функция для обновления completedAt в Airtable
  const toggleCompletedAt = async (todo) => {
    const updatedTodo = {
      fields: {
        completedAt: !todo.completedAt, // Переключаем значение completedAt
      }
    };

    const options = {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedTodo),
    };

    try {
      const response = await fetch(`${URL}/${todo.id}`, options);
      if (!response.ok) {
        console.error('Error updating task:', response.status);
        return;
      }

      const updatedData = await response.json();
      console.log('Task updated:', updatedData);

      setTodoList(prevList => prevList.map(t => 
        t.id === todo.id ? { ...t, completedAt: updatedData.fields.completedAt } : t
      ));
    } catch (error) {
      console.error('Error:', error);
    }
  };
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
                    <TodoList todoList={sortedTodoList} onToggleCompletedAt={toggleCompletedAt} onRemove={handleRemove}/>
                  )}
                 <Link to="/new" style={{ textDecoration: 'none' }}>
                  <button>Go to new list</button>
    </Link>
              </>
            }
          /> 
          <Route path ='/new'
            element ={
            <>
              <h1>New Todo List</h1>
              <Link to="/" style={{ textDecoration: 'none' }}>
                <button>Go to Home</button>
              </Link>
            </>
            }
            
          />
          
        </Routes>
      </BrowserRouter>
  )
}


export default App
