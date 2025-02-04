import './App.css'
import TodoListItem from './TodoListItem'

const TodoList = ({todoList, onRemove}) => {
  return (
      <ul>
        {todoList.map((item)=> (
          <TodoListItem key={item.id} item={item} onRemove={onRemove}/>
          
        ))}
      </ul>
  )   
};

export default TodoList;