import React, {useState} from 'react';
import logo from './logo.svg';
import './Todo.css';
import Mycode from './mycode'
import Task from './Task'

function Todo() {
  var myVar = "new variable";
  const [count, setCount] = useState(0);
  const [childCount, setChildCount] = useState(0);
  function toDoClick(e){
    setCount(count+1);
  }
  function callBackFromChild(){
    setChildCount(childCount+1);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is my code
          {/* Edit <code>src/Todo.js</code> and save to reload. */}
        </p>   
        {/* <button onClick={()=>setCount(count+1)}>ToDo Click!</button>  */}
        <button onClick={toDoClick}>ToDo Click!</button>
        <Mycode variableFromTodo={myVar} countFromTodo={count} parentCallback={callBackFromChild}/>
        <div>Child button clicked {childCount} times</div>
        <section>
          <Task/>
        </section>
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
