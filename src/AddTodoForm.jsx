import { useEffect, useState, useRef } from 'react'

import InputWithLabel from './InputWithLabel/InputWithLabel'

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
        setTodoTitle(e.target.value);
        }
    return(
        <form onSubmit={handleAddTodo}>
            <InputWithLabel 
                value={todoTitle} 
                onTitleChange={handleTitleChange} 
            > 
                  Title
            </InputWithLabel> 
        </form>
    )
};

export default AddTodoForm;