import React from 'react';
function Card(props){
  return(
      <>
  <div className='cards'>
  <div className='card'>
  <img src = {props.imgsrc} alt="myimage1"/>
 
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