import React,{createContext} from 'react'
import ComA from './ComA.jsx'
const FirstName = createContext();
const LastName = createContext();
const App=()=>{
  return(
    <>
    <FirstName.Provider value={"dc"}>
    <LastName.Provider value={'12'}>
    
    </LastName.Provider>
    </FirstName.Provider>
    </>
  )
}<ComA/>
export default App;
export {FirstName,LastName};