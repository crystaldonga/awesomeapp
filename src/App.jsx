import React, { useState } from "react";
import ToDoLists from "./ToDoLists.jsx";

const App = () => {
  const [inputList, setInputList] = useState();
  const [Items, setItems] = useState([]);
  const itemEvent = (event) => {
    setInputList(event.target.value);
  };
  const listOfItem = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };
  const deletItem=(id)=>{
    console.log("deleted");
    setItems((oldItems)=>{
   return oldItems.filter((arrElem ,index)=>{
      return index!==id;
   });
    });

  };
  return (
    <>
      <div className="c">
        <div className="a">
          <h1 className="b">ToDo List</h1>
          <br />
          <input
            type="text"
            placeHolder="add a new item"
            onChange={itemEvent}
            value={inputList}
          />
          <button onClick={listOfItem}>+</button>
          <ol type="none">
            {/* <li>{inputList}</li> */}
            {Items.map((itemVal, index) => {
              return <ToDoLists text={itemVal} key={index} id={index} onSelect={deletItem} />;
            })}
          </ol>
        </div>
      </div>
    </>
  );
};
export default App;
