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

  const completeTask = (e) => {
    const temparr = [...todos];
    const id = e.target.getAttribute('id');
    temparr.forEach(element => {
      if(element.id == id) {
        if(element.completed == false) {
          element.completed = true;
          settodos(temparr);
        }
        else {
          element.completed = false;
          settodos(temparr);
        }
      }
    });
  }
  return (
    <div>
    {todos.map(todo => (
      <div key={todo.id} className='Todo-Container'>
        <Checkbox id={todo.id} onClick={completeTask} checked={todo.completed}/>
        <p>{todo.content}</p>
        <Button variant="outlined" 
        onClick={removeTask} 
        id={todo.id}>Delete</Button>
      </div>
    ))}
    </div>
  )
}

export default Todo