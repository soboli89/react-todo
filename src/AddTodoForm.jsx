import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function AddTodoForm ({ addTodo }){
    const [todoTitle, setTodoTitle] = useState('');
    
    const handleTitleChange = (e) =>{
        e.preventDefault();
        const newTodoTitle = e.target.value;
        setTodoTitle(newTodoTitle);
    }
    const handleAddTodo = (e) =>{
        e.preventDefault();
        addTodo( {name: todoTitle, id: Date.now()});
        setTodoTitle('');
    }

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