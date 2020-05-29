import React, {useState}from 'react';
import Todo from './Todo';
import './App.css';


function App() {
  // we need a list of todo's
  // useState
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();      // protect to refreshing page always use

     // [] 'walk the dogs'
     // ['walk the dogs']
     setTodos([...todos, input]);
     setInput("");
  }
  return (
    <div className="app">
      <h1 className="titleMain">raf's todo list</h1>
      <input value={input} onChange={e => setInput(e.target.value)} type="text"/> 
      <button disabled={!input} onClick={handleSubmit}>Add Todo</button>

      {todos.map((todo) => (
        <Todo title={todo} description={todo.description} />
      ))}
    </div>
  );
}

export default App;
