import React,{useState}from 'react';


const App=()=>{

    const state =useState;
    const[count,setCount] = useState(0)

    const IncMent=()=>{
       setCount(count+1);
        
    };
    
    
    return (
        <>
        <div className="div">
         <h1 className="count">{count}</h1>
         <button onClick={IncMent} className="btn">click me</button>
         </div>
        </>
    );
};

export default App;