import react,{useState} from 'react';

const App=()=>{
    let newTime = new Date().toLocaleTimeString();
    const[ctime,stime] = useState(newTime);

    const UpdateTime=()=>{
        newTime = new Date().toLocaleTimeString();
        stime(newTime);
    }
    setInterval(UpdateTime, 1000);
    return(<>
    <div>
        <h1>{ctime}</h1>
        
        </div>
    </>)
}
export default  App; 