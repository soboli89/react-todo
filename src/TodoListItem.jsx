import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function TodoListItem (props) {
    return (
        <li>{props.item.name}</li>
    )
}

export default TodoListItem;
