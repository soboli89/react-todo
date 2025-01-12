import './App.css'
import Button from './Button'


function TodoListItem ({item, onRemove}) {
    return (
        <li>{item.title}
            <Button label="Delete" onClick={()=>onRemove(item)}></Button>
        </li>
    )
}

export default TodoListItem;
