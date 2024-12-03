import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function AddTodoForm ({ onAddTodo }){
    const [newTodoTitle, setNewTodo] = useState('');
    const handleAddTodo = (e) =>{
        e.preventDefault();
        onAddTodo({id: Date.now(), name: newTodoTitle});
        setNewTodo('');
    }
    const handleChange =(e) => {
        const setNewTodoItem = e.target.value;
        setNewTodo(setNewTodoItem);
    }
    return(
        <form onSubmit={handleAddTodo}>
            <label htmlFor="todoTitle" >Title</label><br/>
            <input 
                name="item" 
                id="todoTitle" 
                type="text" 
                value={newTodoTitle}
                onChange={handleChange}
            />
            <br/>
            <input type="submit" ></input>
        </form>
    )
};

export default AddTodoForm;