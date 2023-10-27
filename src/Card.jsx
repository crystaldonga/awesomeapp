import React from 'react';
import Images from './images.jsx';
function Card(props){
  return(
      <>
  <div className='cards'>
  <div className='card'>
  <Images imgsrc={props.imgsrc}/>
 
  <div className='card-info'>
  <span className='card-name'>{props.title}</span>
  <h3 className='card-title'>{props.sname}</h3>
  <a href={props.link}>
      <button>Watch Now</button>
  </a>

  </div>
  </div>

  </div>
      </>
  );
}

export default Card;