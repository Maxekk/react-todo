import React from 'react'
import { Checkbox } from '@mui/material'

function Todo({ todos }) {
  return (
    <div>
    {todos.map(todo => (
      <div key={todo.id} className='todo-container'>
        <Checkbox />
        <h3>{todo.content}</h3>
      </div>
    ))}
    </div>
  )
}

export default Todo