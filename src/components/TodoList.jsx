import './App/App.css'
import TodoListItem from './TodoListItem/TodoListItem'
import PropTypes from "prop-types";


const TodoList = ({todoList, onRemove, onToggleCompletedAt}) => {
  return (
      <ul>
        {todoList.map((item)=> (
          console.log(item),
          <TodoListItem key={item.id} style={{ textDecoration: item.completed ? 'line-through' : 'none' }} item={item} onRemove={onRemove} onToggleCompletedAt={onToggleCompletedAt}/>
        ))}
      </ul>
  )   
};


TodoList.propTypes = {
  todoList: PropTypes.array,
  onRemove: PropTypes.func,
};


export default TodoList;