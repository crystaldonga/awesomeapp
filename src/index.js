import React from 'react';
import ReactDOM  from 'react-dom';
import Card from './Card.jsx';
import Sdata from './Sdata.jsx';
import './index.css';

function ndata(val){
    return (<>
        <Card imgsrc={val.imgsrc}
        title={val.title}
        sname={val.sname}
        link={val.link}
    />
    </>);
}

ReactDOM.render(
    <>
    <h1 className='d'>TOP 3 NETFLIX SERIES</h1>
    

    {Sdata.map(ndata)};
    </>,document.getElementById('root')
);
