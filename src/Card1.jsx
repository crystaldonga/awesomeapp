import React from 'react';

import './Card.css';

const Card1 = props => {
  return (
    <div className={`card ${props.className}`} style={props.style}>
      {props.children}
    </div>
  );
};

export default Card1;
