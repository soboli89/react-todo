import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function AddTodoForm ({ onAddTodo }){
    const [todoTitle, setTodoTitle] = useState('');
    //const [newTodoTitle, setNewTodo] = useState('');
    
    const handleTitleChange = (e) =>{
        e.preventDefault();
        console.log(e.target.value);
        const newTodoTitle = e.target.value;
        setTodoTitle(newTodoTitle);
    }
    const handleAddTodo = (e) =>{
        e.preventDefault();
        onAddTodo( {name: todoTitle, id: Date.now()});
        setTodoTitle('');
    }
   /* const handleChange =(e) => {
        const setNewTodoItem = e.target.value;
        setNewTodo(setNewTodoItem);
    }*/
    return(
        <form onSubmit={handleAddTodo}>
            <label htmlFor="todoTitle" >Title</label><br/>
            <input 
                name="item" 
                id="todoTitle" 
                type="text" 
                value={todoTitle}
                onChange={handleTitleChange}
            />
            <br/>
            <input type="submit" ></input>
        </form>
    )
};

export default AddTodoForm;