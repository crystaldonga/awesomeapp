import React ,{useState}from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';



const CreateNote=(props)=>{
    const[expand,setExpand] =useState(false)
    const[note,setNote] = useState({
        title:'',
        content:''
    });

    const addEvent=()=>{
    props.passNote(note);
    setNote({
        title:'',
        content:'',
    })
    }

   const inputEvent=(event)=>{
   const value =event.target.value;
   const name =event.target.name;
    setNote((prevvalue)=>{
        return{
            ...prevvalue,
            [name]:value
        }
    })
    }
    const expandIt=()=>{
        setExpand(true);
    }
    const backTonormal=()=>{
        setExpand(false);
    }
    return(<>
   <div className="main_note" onDoubleClick={backTonormal}>
    <form>
        {expand?<input type="text" onChange={inputEvent} placeHolder='title' value={note.title} name="title"autoComplete="off"/>:null}
        <textarea rows="" column="" onChange={inputEvent} value={note.content}name="content"placeHolder="Write a note...."onClick={expandIt} ></textarea>
        {
        expand?
        <Button onClick={addEvent}>
        <AddIcon className="plus_sign"/>
        </Button>:null
        }
    </form>
   </div>
    </>)
};

export default CreateNote;