import React ,{useState} from "react";
import Header from './Header'

import CreateNote from './CreateNote';
import Note from './Note';
import Footer from './Footer'
const App=()=>{
  const[addItem,setaddItem] = useState([])
  const addNote=(note)=>{
    //alert("clixckedwd")
    setaddItem((prevdata)=>{
      return[...prevdata,note];
    });
    console.log(note);
  }
  const onDelete=(id)=>{
     setaddItem((olddata)=>
        olddata.filter((currdata,indx)=>{
          return indx!==id;
        })
     )
  }
  return(<>
    <Header/>
    
    <CreateNote passNote=
      {addNote}
    />
    
      {addItem.map((val1,index)=>{
        return  <Note 
             key={index}
             id={index}
             title={val1.title}
             content={val1.content}
             deleteItem={onDelete}
        />
      })}
    <Footer/>
  </>)
}

export default App;
