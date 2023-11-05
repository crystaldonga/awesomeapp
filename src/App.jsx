import React,{createContext} from 'react'
import ComA from './ComA.jsx'
const FirstName = createContext();
const LastName = createContext();
const App=()=>{
  return(
    <>
    <FirstName.Provider value={"dc"}>
    <LastName.Provider value={'12'}>
      <ComA/>
    </LastName.Provider>
    </FirstName.Provider>
    </>
  )
}
export default App;
export {FirstName,LastName};