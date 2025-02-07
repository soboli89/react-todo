import Button from '../Button'
import style from './TodoListItem.module.css'



function TodoListItem ({item, onRemove}) {
    return (
        
        <li className={style.listItem}>
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 11.917 9.724 16.5 19 7.5"/>
            </svg>

            {item.title}
            <Button label="Delete" onClick={()=>onRemove(item)}></Button>
        </li>
    )
}

export default TodoListItem;

