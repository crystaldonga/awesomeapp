import React,{useState,useEffect}from 'react'
const App=()=>{
  const[num,setNum] =useState(0);
  const[nums,setNums] =useState(0);
  useEffect(()=>{
    alert("cliked me")
  },[num])
  return(<>
    <button onClick={()=>{
      setNum(num+1)
    }}>Click Me {num}
    </button>

    <button onClick={()=>{
      setNums(nums+1)
    }}>Click Me {nums}
    </button>
  </>)
}
export default App;
