import react, { useState, useEffect } from 'react';
import './App.css';
import Todo from './Todo';
import { v4 as uuidv4 } from 'uuid';
import { Button } from '@mui/material';

function App() {
  const initialState = JSON.parse(localStorage.getItem("todos")) || [];
  const [todos,settodos] = useState(initialState);
  const [task,settask] = useState("");
  
  const handleInput = (e) => {
    console.log(e.target.value);
    settask(e.target.value.toString());
  }

  const handleForm = (e) => {
    e.preventDefault();
    settodos([...todos, {id: uuidv4(), content: task, completed: false}])
    settask("");
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  },[todos])

  return (
    <div className="App">
      <header className="App-header">
        <div className="Container">
          <form onSubmit={handleForm}>
            <input type="text" 
            className="Main-input" 
            onChange={handleInput}
            value={task}>
            </input>
            <button type="submit" className='Add-task'>+</button>
          </form>
        <Todo todos={todos} settodos={settodos}/>
        </div>
      </header>
    </div>
  );
}

export default App;
