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
