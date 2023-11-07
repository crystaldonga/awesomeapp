import React from 'react'
import {useParams,useLocation,useNavigate} from 'react-router-dom'
const Home=()=>{
    const{fname,lname} = useParams();
    const location = useLocation();
    const history = useNavigate();
    console.log(location);
    return(<>
        <h1>This is home </h1>
       
    </>)
}
export default Home;