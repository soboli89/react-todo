import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function AddTodoForm ({ addTodo }){
    const [todoTitle, setTodoTitle] = useState('');
    
    
    const handleAddTodo = (e) =>{
        e.preventDefault();
        addTodo({id: Date.now(), name: todoTitle});
        setTodoTitle('');
    }
    const handleChange =(e) => {
        e.preventDefault();
        const setTodoItem = e.target.value;
        setTodoTitle(setTodoItem);
    }
    return(
        <form onSubmit={handleAddTodo}>
            <label htmlFor="todoTitle" >Title</label><br/>
            <input 
                name="item" 
                id="todoTitle" 
                type="text" 
                value={todoTitle}
                onChange={handleChange}
            />
            <br/>
            <input type="submit" ></input>
        </form>
    )
};

export default AddTodoForm;