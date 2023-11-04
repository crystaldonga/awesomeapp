import React,{useState} from 'react'
const My=(currElem)=>{
    const[show,setShow] = useState(false);
    return(
        <>
         <div classNmae="main-heading">
            <p onClick={()=>{
                setShow(!show)
            }}>{ show?'-': '+'}</p>
            <h3>{currElem.question}</h3>
         </div>
        {show && <p classNmae="answers">{currElem.answer}</p>}

    </>
    )
}
export default My;