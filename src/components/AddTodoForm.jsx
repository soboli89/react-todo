import { useEffect, useState, useRef } from 'react'
import PropTypes from "prop-types";

import InputWithLabel from '../components/InputWithLabel/InputWithLabel'

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

AddTodoForm.propTypes = {
    onAddTodo: PropTypes.func
  };

export default AddTodoForm;