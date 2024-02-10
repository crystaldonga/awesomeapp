import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {increment,decrement} from './action/index'
const App=()=>{
  const mystate=useSelector((state)=>state.changeTheNumber);
  console.log(mystate)
  const dispatch = useDispatch();
  return (
    <>
     <div className="container">
     <h1>Increment / Decrement</h1>
     <h4>
      using React and Redux
     </h4>
     <div>
      <button onClick={()=>dispatch(increment(5))}>+</button>
      <input type="text" value={mystate}/>
      <button onClick={()=>dispatch(decrement())}>-</button>
      
     </div>
     </div>
    </>
  )
}
export default App;