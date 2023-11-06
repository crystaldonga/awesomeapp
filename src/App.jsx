import React from 'react'
import {Switch,Route} from "react-router-dom"
import About from './About.jsx'
import Contact from './Contact.jsx'
import Error from './Error.jsx'
import Menu from './Menu.jsx'
import Name from './Name'
import Service from './Service'

const App=()=>{

     
  return(<>
    <Menu/>
    <Switch>
      <Route exact path="/" component={()=>{
        <About/>
      }}/>
      <Route exact path="/Contact" render={()=>{
        <Contact name ="contact"/>
      }}/>
      <Route exact path="/Service" component={Service}/>
      <Route path="/Contact/Name" component={Name}/>
      <Route  component={Error}/>

      
      
    </Switch>
  </>);
}

export default App;