import React from 'react';


const  ToDoLists =(props)=>{
    return(<>
        <div classNmae="todo_style">
        <i className="fa fa-times-circle" aria-hidden="true" onClick={()=>{
              props.onSelect(props.id);
        }}
        />
        <li>{props.text}</li>
        </div>
    </>)
}

export default ToDoLists;