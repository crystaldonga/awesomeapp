import React, { useState } from "react";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import ListCom from './ListCom';



const App=()=>{
  const[item,setItem] = useState();
  const[newItem,setNewItem] = useState([]);
  const itemEvent=(event)=>{
     setItem(event.target.value);
  }
  const listOfItem=()=>{
       setNewItem((prevValue)=>{
           return [...prevValue,item]
       })
       setItem("");
  }
  return(<>
   <div className="main">
    <div className="center">
     <h1> ToDo List</h1>
     <br/>
     <input type="text" placeholder="add a new Item" onChange={itemEvent} value={item}/>
     <Button className="newbtn" onClick={listOfItem}><AddIcon/></Button>
     <br/>
     <ol type="none">
     
     { newItem.map((val,index)=>{
     return <ListCom text={val} key={index}/>
      })}
     </ol>

    </div>

   </div>
  </>)
}
export default App;
