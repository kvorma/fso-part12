import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos, deleteTodo, completeTodo }) => {
  console.log('todos=', todos)
  return (
    <>
      {todos.map(todo => {
        return (
          <div key={todo._id}>
            <Todo todo={todo} deleteTodo={deleteTodo} completeTodo={completeTodo} />
          </div>
        )
      }).reduce((acc, cur) => [...acc, <hr />, cur], [])}
    </>
  )
}

export default TodoList
