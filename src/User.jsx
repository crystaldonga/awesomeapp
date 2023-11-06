import React from 'react'
import {useParams,useLocation} from 'react-router-dom'
const User=()=>{
    const{fname,lname} = useParams();
    const location = useLocation();
    console.log(location);
    return(<>
        <h1>my {fname} {lname} </h1>
        <br/>
        <h2>my current location is {location.pathname}</h2>
        {location.pathname===`/user/vinod/thapa`? (<button onClick={()=>alert("clicked me")}></button>):null}
    </>)
}
export default User;