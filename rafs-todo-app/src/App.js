import React from 'react';
import Todo from './Todo';
import './App.css';


function App() {
  return (
    <div className="app">
      <h1 className="titleMain">raf's todo list</h1>

      < Todo />    
      < Todo />
      < Todo />

      <div className="todo">
        <h2>this is todo</h2>
        <p>my first task</p>
      </div>
    </div>
  );
}

export default App;
