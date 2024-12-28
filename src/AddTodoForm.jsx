import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InputWithLabel from './InputWithLabel'

function AddTodoForm ({ addTodo }){
    const [todoTitle, setTodoTitle] = useState({});
    
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
            <InputWithLabel todoTitle={todoTitle} setValues={handleChange} />
        </form>
    )
};

export default AddTodoForm;