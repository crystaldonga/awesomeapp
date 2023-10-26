import React from 'react';
import {add,sub,mul,div} from './Calc.jsx';

function App(){
  return(
    <>
    <ul>
    <li>{add(20,3)}</li>
    <li>{sub(20,3)}</li>
    <li>{mul(20,3)}</li>
    <li>{div(20,3)}</li>
    </ul>
    </>
  );
}
export default App;
