import React from 'react';


const Todo = ({completed , text}) => {

    const inputElem = completed ? <input type="checkbox" checked/> : <input type="checkbox"/> ; 

    return(
        <div className="todo-item">
            {inputElem}
            <p>{text}</p>
        </div>
    );
}

export default Todo;