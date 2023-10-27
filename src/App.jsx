import React from 'react';


import Amazon from './Amazon.jsx';
import Netflix from './Netflix.jsx';
let favs ="netflix";

const App=()=>{


 
  
              <>
    <h1 className='d'>TOP 3 NETFLIX SERIES</h1>
    {/* <favs1/> */}
    {(favs==='netflix')?<Amazon/>:<Netflix/>}

    
    </>
  
}

export default App;