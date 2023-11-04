import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';


const App = () => {

  const[num,setnum] = useState(0);

  const increment=()=>{
    setnum(num+1);
  }
  const decrement=()=>{
    if(num>0){
      setnum(num-1);
    }else{
      alert("limit reached")
    }
  }
   return(<>
    <div className="main">
    <div className="center">
          <h1>{num}</h1>
          <Tooltip title="add">
          <Button className="btn1"
          onClick={increment}>
          <AddIcon/>
          </Button>
          </Tooltip>
          <Tooltip title="Delete">
          <Button className="btn2"
          onClick={decrement}>
          <DeleteIcon/>
          </Button>
          </Tooltip>
    </div>


    </div>
   </>);
};
export default App;
