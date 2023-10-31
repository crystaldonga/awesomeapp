import React,{useState} from 'react'

const App=()=>{
   const[name,setname] = useState();
   const[fullname,sname] = useState();
   const inputValue=(event)=>{
    console.log(event.target.value);
    setname(event.target.value);
   }
   const finalOut=()=>{
    sname(name)
   }
   return(
      <>
      <div>
         <h1>Hello {fullname}</h1>
         <input type='text' placeholder="Enter your name" defaultValue="" onChange={inputValue} value={name}/>
         <button onClick={finalOut}>Click me</button>
      </div>
      </>
   );
}

export default App;


