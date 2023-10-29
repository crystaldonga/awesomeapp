import react,{useState} from 'react';

const App=()=>{
    let newTime = new Date().toLocaleTimeString();
    const[ctime,stime] = useState(newTime);

    const UpdateTime=()=>{
        newTime = new Date().toLocaleTimeString();
        stime(newTime);
    }
    return(<>
    <div>
        <h1>{ctime}</h1>
        <button onClick={UpdateTime}>get time</button>
        </div>
    </>)
}
export default  App; 