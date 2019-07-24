import React from 'react';
import logo from './logo.svg';
import './Todo.css';
import Mycode from './mycode'

function Todo() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is my code
          {/* Edit <code>src/Todo.js</code> and save to reload. */}
        </p>
        <Mycode/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Todo;
