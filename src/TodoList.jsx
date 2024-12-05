import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoListItem from './TodoListItem'

const TodoList = (props) => {
  return (
      <ul>
        {props.todoList.map((item)=> (
          <TodoListItem key={item.id} item={item}/>
        ))}
      </ul>
  )   
};

export default TodoList;