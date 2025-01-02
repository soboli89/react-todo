import './App.css'
import TodoListItem from './TodoListItem'

const TodoList = (props) => {
  return (
      <ul>
        {props.todoList.map((item)=> (
          <TodoListItem key={item.id} item={item} onRemove={props.onRemove}/>
        ))}
      </ul>
  )   
};

export default TodoList;