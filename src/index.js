import React from 'react';
import ReactDOM  from 'react-dom';
import App from './App.jsx';
import './index.css';



ReactDOM.render(
    <>
   
    <App/>
   
    </>
    ,document.getElementById('root')
);
//spred opretor

// const arr1 = ['crystal','donga'];
// const arr2=[1,...arr1];
// console.log(arr1);
// console.log(arr2);


// const array = [1,2,3,4,'dc']
// const [id,fname] = array
// console.log(id)
// console.log(fname);

// const array = [1,2,3,4,'dc']
// const [id,...remaing] = array
// console.log(id)
// console.log(remaing);


const fullname={
    fname:'c',
    lname:'d'
};
// const biodata={
//   id:1,
//   ...fullname,
//   age:26
// };
// console.log(biodata);


const {fname:name,lname:n1} = fullname;
console.log(name);
console.log(n1);
