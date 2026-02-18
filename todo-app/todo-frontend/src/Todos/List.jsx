import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos, deleteTodo, completeTodo }) => {
  return (
    <div>
      <hr />
      {todos.map(todo => (
        <div key={todo._id}>
          <Todo todo={todo} deleteTodo={deleteTodo} completeTodo={completeTodo} />
          <hr />
        </div>
      ))}
    </div>
  )
}


export default TodoList
