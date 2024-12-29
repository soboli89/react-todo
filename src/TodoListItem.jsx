import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './Button'


function TodoListItem (props) {
    return (
        <li>{props.item.name}
            <Button label="Delete" onClick={()=>props.onRemove(props.item)}></Button>
        </li>
    )
}

export default TodoListItem;
