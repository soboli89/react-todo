import Button from '../../Button'
import style from './TodoListItem.module.css'
import PropTypes from "prop-types";


function TodoListItem ({item, onRemove, onToggleCompletedAt}) {
    return (        
        <li className={style.listItem} >
        <svg width="30" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 11.917 9.724 16.5 19 7.5"/>
        </svg>
        <span style={{ 
            textDecoration: item.completedAt ? 'line-through' : 'none', width:"80%"
        }}>{item.title} </span>
        <button onClick={() => onToggleCompletedAt(item)}>
            {item.completedAt ? 'Mark as Incomplete' : 'Mark as Completed'}
        </button>
        <Button label="Delete" onClick={() => onRemove(item)}></Button>
    </li>
    )
}

TodoListItem.propTypes = {
    todoLiitemst: PropTypes.object,
    onRemove: PropTypes.func,
  };


export default TodoListItem;

