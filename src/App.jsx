import React from 'react';


import Amazon from './Amazon.jsx';
import Netflix from './Netflix.jsx';
let favs ="netflix";
const favs1=()=>{
    if(favs==="netflix"){
       return(<>
       <Amazon/>
       </>);
    }else{
      return(<>
       <Netflix/>
       </>);
    }
}
const App=()=>{


 
  
              <>
    <h1 className='d'>TOP 3 NETFLIX SERIES</h1>
    <favs1/>

    
    </>
  
}

export default App;