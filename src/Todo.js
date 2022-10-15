import React from 'react'
import { Checkbox, Button } from '@mui/material'

function Todo({ todos, settodos }) {
  const removeTask = (e) => {
    const id = e.target.getAttribute('id');
    todos.forEach(element => {
      if(element.id == id){
        settodos(todos.filter(element => element.id !== id));
      }
    });
  }

  return (
    <div>
    {todos.map(todo => (
      <div key={todo.id} className='Todo-Container'>
        <Checkbox />
        <p>{todo.content}</p>
        <Button variant="outlined" 
        onClick={removeTask} 
        id={todo.id}>Remove</Button>
      </div>
    ))}
    </div>
  )
}

export default Todo