import React, { useState } from "react";


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
          
          <button onClick={increment}>increm</button>
          <button onClick={decrement}>decrem</button>
    </div>

    </div>
   </>);
};
export default App;
