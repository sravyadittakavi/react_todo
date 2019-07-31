import React from 'react';

function Mycode(props) {
    var valueFromTodo = props.variableFromTodo;
    function childClick(e){
        props.parentCallback();
    }
    return(<div>
        <p>This is my code from Child component</p>
    <div>{valueFromTodo}</div>
    <div>ToDo button clicked {props.countFromTodo} times</div>
    <button onClick={childClick}>Button in Child</button>
    </div>);
}

export default Mycode;