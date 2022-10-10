import react, { useState } from 'react';
import './App.css';
import Todo from './Todo';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todos,settodos] = useState([]);
  const [task,settask] = useState("");

  const handleInput = (e) => {
    console.log(e.target.value);
    settask(e.target.value.toString());
  }

  const handleForm = (e) => {
    e.preventDefault();
    settodos([...todos, {id: uuidv4(), content: task, completed: false}])
    console.log(todos);
    settask("");
  }

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleForm}>
          <input type="text" 
          className="Main-input" 
          onChange={handleInput}
          value={task}>
          </input>
          <button type="submit">Add task</button>
        </form>
        <Todo todos={todos}/>
      </header>
    </div>
  );
}

export default App;
