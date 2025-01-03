import { useEffect, useState, useRef } from 'react'
import './App.css'
import InputWithLabel from './InputWithLabel'
import Button from './Button'

function AddTodoForm ({ addTodo }){
    const [todoTitle, setTodoTitle] = useState('');
   
    
    const handleAddTodo = (e) =>{
        if (todoTitle.trim()){
        e.preventDefault();
        addTodo({id: Date.now(), name: todoTitle});
        setTodoTitle('');
        }
    }

    const handleTitleChange =(e) => {
        e.preventDefault();
        setTodoTitle(e.target.value);
        }
    return(
        <form onSubmit={handleAddTodo}>
            <InputWithLabel 
                onTitleChange={handleTitleChange} 
                value={todoTitle} 
            >
                Title
            </InputWithLabel> 
        </form>
    )
};

export default AddTodoForm;