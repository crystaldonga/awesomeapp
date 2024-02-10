import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import App from './App.js';
import{Provider} from 'react-redux';
store.subscribe(()=>{
  console.log( "get the state"+store.getState());
})

//import './index.css';


ReactDOM.render(
  <>
<Provider store={store}>
<App />
</Provider>
</>, document.getElementById('root'));
