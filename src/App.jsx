import React from 'react'
import {Switch,Route} from "react-router-dom"
import About from './About.jsx'
import Contact from './Contact.jsx'
import Error from './Error.jsx'
import Menu from './Menu.jsx'
import Name from './Name'

const App=()=>{

     
  return(<>
    <Menu/>
    <Switch>
      <Route exact path="/" component={About}/>
      <Route exact path="/Contact" component={Contact}/>
      <Route path="/Contact/Name" component={Name}/>
      <Route  component={Error}/>

      
    </Switch>
  </>);
}

export default App;