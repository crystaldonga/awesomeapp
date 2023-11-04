import React ,{useState} from "react";
import questions from './Qa.jsx';
import My from './My';
const App=()=>{
    const[data,setData] =useState(questions);
    return(<>
      <section classNmae="main">
      <h1>React Interview Questions</h1>
           { data.map((currElem)=>{
            
                return <My key={currElem.id}  {...currElem}/>
            })}
            </section>
    </>)
}

export default App;
