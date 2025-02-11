import './App/App.css'
import TodoListItem from './TodoListItem/TodoListItem'
import PropTypes from "prop-types";


const TodoList = ({todoList, onRemove}) => {
  return (
      <ul>
        {todoList.map((item)=> (
          <TodoListItem key={item.id} item={item} onRemove={onRemove}/>
        ))}
      </ul>
  )   
};


TodoList.propTypes = {
  todoList: PropTypes.array,
  onRemove: PropTypes.func,
};


export default TodoList;