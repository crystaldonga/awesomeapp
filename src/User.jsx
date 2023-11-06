import React from 'react'
import {useParams,useLocation,useHistory} from 'react-router-dom'
const User=()=>{
    const{fname,lname} = useParams();
    const location = useLocation();
    const history = useHistory();
    console.log(location);
    return(<>
        <h1>my {fname} {lname} </h1>
        <br/>
        <h2>my current location is {location.pathname}</h2>
        {location.pathname===`/user/vinod/thapa`? (<button onClick={()=>{history.goBack()
        history.push('/')
        }}> 
        goBack
        </button>):null}
    </>)
}
export default User;