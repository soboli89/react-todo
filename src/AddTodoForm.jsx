import { useEffect, useState, useRef } from 'react'
import './App.css'
import InputWithLabel from './InputWithLabel'
import Button from './Button'

function AddTodoForm ({ addTodo }){
    const [todoTitle, setTodoTitle] = useState({});
   
    
    const handleAddTodo = (e) =>{
        e.preventDefault();
        addTodo({id: Date.now(), name: todoTitle});
        setTodoTitle('');
    }
    const handleTitleChange =(e) => {
        e.preventDefault();
        const setTodoItem = e.target.value;
        setTodoTitle(setTodoItem);
        }
    return(
        <form onSubmit={handleAddTodo}>
            <InputWithLabel todoTitle={todoTitle} onTitleChange={handleTitleChange} >Title</InputWithLabel> 
        </form>
    )
};

export default AddTodoForm;