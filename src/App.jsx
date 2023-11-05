import React,{useEffect} from 'react'
const App=()=>{
  const getCovidData =async()=>{
    const res =await fetch("")
  }
  useEffect(()=>{
   getCovidData();
  },[])
  return(<>
   <h1>INDIA COVID-19 Dashboard</h1>
  </>)
}

export default App;