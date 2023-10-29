import react,{useState} from 'react';


const App=()=>{

    const[bg,setbg] = useState("purple");
    const[name,sname]=useState("click me");
    const bgChange=()=>{
     let newColor = "green";
     setbg(newColor);
     sname("auhuauha");

    }

    const bgBack=()=>{
    setbg("purple");
    sname("ouch 🤷‍♂️" );
    }
   return(<>
      <div style={{backgroundColor:bg}}>
        <button onClick={bgChange} onDoubleClick={bgBack}> {name} </button>
      </div>


   </>)

}
export default App;