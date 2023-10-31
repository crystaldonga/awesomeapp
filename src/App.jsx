import React,{useState} from 'react'

const App=  ()=>{
   const[name,fname] = useState("");
   const[fullname,statename] = useState("");
   const[lnameo,fnameo] = useState("");
   const[lastname,statename1]=useState("");

   const inputOne=(e)=>{
      console.log(e.target.value);
      fname(e.target.value);
      

   }

   const inputTwo=(e)=>{
      console.log(e.target.value);
      fnameo(e.target.value);
      

   }
   const onSubmits=(e)=>{
      e.preventDefault();
      statename(name);
      statename1(lnameo);
      

   }
   return(<>
   <form onSubmit={onSubmits}>
      <h1>Hello {fullname} {lastname}</h1>
      <input type="text" placeHolder="Enter your fname" onChange={inputOne} /><br/>
      <input type="text" placeHolder="Enter your lname" onChange={inputTwo} />
      <button type="submit">Click me</button>
   </form>
   </>)
}

export default App;


