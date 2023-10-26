
import React from 'react';
import  ReactDOM from 'react-dom';
//import Myname,{name1,name2} from './App';
import * as ques from './App';



ReactDOM.render(
  <>
    <ol>
      <li>crystal</li>
      <li>{ques.default}</li>
      <li>{ques.name1()}</li>
      <li>{ques.name2()}</li>

    </ol>
  </>,document.getElementById('root')

);