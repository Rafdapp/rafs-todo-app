import React from'react';

const Todo =(props) =>{  
             // es6 way to write  component, props customize each element

    return (
      <div className="todo">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
    );
};

export default Todo;       // mean use this code in different file

