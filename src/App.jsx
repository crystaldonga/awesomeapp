import React from 'react';
import Card from './Card.jsx';
import Sdata from './Sdata.jsx';
const App=()=>{


    function ndata(val){
        return (<>
            <Card imgsrc={val.imgsrc}
            title={val.title}
            sname={val.sname}
            link={val.link}
        />
        </>);
    }
  return (<>
              <>
    <h1 className='d'>TOP 3 NETFLIX SERIES</h1>
    

    {Sdata.map(ndata)};
    </>
  </>);
}

export default App;