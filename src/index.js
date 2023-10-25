// import React from 'react';
// import ReactDom from 'react-dom';
// ReactDom.render(<h1>hello world !!</h1>,document.getElementById('root'));

// import React from 'react';
// import ReactDom from 'react-dom';

// ReactDom.render( /*#__PURE__*/_jsx("h1", {
//   children: "hello world !!"
// }), document.getElementById('root'));



// var h1 = document.createElement('h1');
// h1.innerHTML='hello world';
// document.getElementById('root').appendChild(h1);

// ReactDom.render(
// <div>
// <h1>hello world</h1>
// <p>this is a paragraph</p>

// </div>,document.getElementById('root'))

// ReactDom.render([
//   <h1>hello world</h1>,
//   <p>my name is crystal</p>
// ],document.getElementById('root'));

// ReactDom.render(<div>
//   <h1>hello world</h1>
//   <p>my name is crystal</p>
// </div>,document.getElementById('root'));

// ReactDom.render(<React.Fragment>
//   <h1>hello world</h1>
//   <p>my name is crystal</p>
//   </React.Fragment>,document.getElementById('root'));

// ReactDom.render(<>
//   <h1>hello world</h1>
//   <p>my name is crystal</p>
//   </>,document.getElementById('root'));


//                                     -----chalange 1-----
// import React from 'react';
// import ReactDOM   from 'react-dom';

// ReactDOM.render(<>
//   <h1>Thapa Technical Netflix Pick</h1>
//   <p>List Of Five Best Series</p>
  
//     <ol>
//      <li>Dark</li>
//      <li>Extra circular</li>
//      <li>My Holo Love</li>
//      <li>My first-2 love</li>
//      <li>My robot</li>

//     </ol>
  
// </>,document.getElementById('root'));

// import React from 'react';
// import ReactDOM   from 'react-dom';

// const name="crystal";
// ReactDOM.render(<><h1>my fname is {name} </h1>
//     <p>the sum is {2+3}</p>
// </>,
// document.getElementById('root'));


//expression is uesd
//statment is not used in jsx react module 

//template liters with dolar symbol
// import React from 'react';
// import ReactDOM   from 'react-dom';
// const fname='crystal';
// const lname='donga';
// ReactDOM.render(<>
//     <h1>{`my first name is  ${fname} ${lname} `}</h1>
//     <p>my sum is {5+6}</p>
// </>,document.getElementById('root'))

//                           ------challanges 2------- 
// import React from 'react';
// import ReactDOM   from 'react-dom';

// const currdate=new Date().toLocaleDateString();
// const currtime = new Date().toLocaleTimeString();
// ReactDOM.render(<>
//     <p>my curr date is {currdate}</p>
//     <p>my curr time is{currtime}</p>
// </>,document.getElementById('root'));


// import React from 'react';
// import  ReactDOM  from 'react-dom';
// const name='crystal';
// const img1="https://picsum.photos/200/300";
// const img2 ="https://picsum.photos/250/300";
// const img3 ="https://picsum.photos/300/300";
// const link="https://www.youtube.com/watch?v=Ez8F0nW6S-w";

// ReactDOM.render(<>
// <h1 contentEditable="true">my name is {name}</h1>
// <img src={img1} alt="random image"/>
// <img src={img2} alt="random image"/>
// <a href={link}>
// <img src={img3} alt="random image"/>
// </a>


// </>,document.getElementById('root'));


// import React from 'react';
// import  ReactDOM  from 'react-dom';
// import './index.css';
// const name='crystal';
// const img1="https://picsum.photos/200/300";
// const img2 ="https://picsum.photos/250/300";
// const img3 ="https://picsum.photos/300/300";
// const link="https://www.youtube.com/watch?v=Ez8F0nW6S-w";
// const heading={
//     color: "blue",
//     margin: "50px 0px",
//     padding: "5px",
//     border: "solid blueviolet 3px",
//     textAlign: "center",
//    fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"
// }

// ReactDOM.render(<>
// <h1 style={heading}>my name is {name}</h1>
// <div className="img_div">
// <img src={img1} alt="random image"/>
// <img src={img2} alt="random image"/>
// <a href={link}>
// <img src={img3} alt="random image"/>
// </a>
// </div>


// </>,document.getElementById('root'));

//                                      ----challange-3------


import React from 'react';
import  ReactDOM from 'react-dom';
import './index.css';

let currtime=new Date();
currtime = currtime.getHours();
let greeting="";
const cssstyle={ };
if(currtime>=1 && currtime<=11){
    greeting="Good Morning";
    cssstyle.color = "green";
}else if(currtime>=12 && currtime<20){
    greeting="Good Afternoon";
    cssstyle.color = "Orange";
}else{
    greeting="Good night"
    cssstyle.color = "Black";
}
ReactDOM.render(
<>
<div>
  <h1>Hello Sir,<spam style={cssstyle}>{greeting}</spam></h1>
  </div>
</>,document.getElementById('root')
);

let str="crystal";

let str2="crystal donga";