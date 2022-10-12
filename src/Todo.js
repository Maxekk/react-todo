import React from 'react'
import { Checkbox, Button } from '@mui/material'

function Todo({ todos }) {
  const removeTask = (e) => {
    let i = 0;
    const id = e.target.getAttribute('id');
    console.log(id);
    todos.forEach(element => {
      if(element.id == id){
        todos.filter(element => element.id !== id);
      }
    });
  }

  
  return (
    <div>
    {todos.map(todo => (
      <div key={todo.id} className='Todo-Container'>
        <Checkbox />
        <h3>{todo.content}</h3>
        <Button variant="contained" onClick={removeTask} id={todo.id}>Remove</Button>
      </div>
    ))}
    </div>
  )
}

export default Todo