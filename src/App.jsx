import React from 'react'
import {Route,Switch} from "react-router-dom"
import About from './About.jsx'
import Contact from './Contact.jsx'
import Error from './Error.jsx'

const App=()=>{
  const Name=()=>{
    return(<><h1>name page</h1></>)
  }
  return(<>
    <Switch>
      <Route exact path="/" component={About}/>
      <Route exact path="/Contact" component={Contact}/>
      <Route path="/Contact/Name" component={Name}/>
      <Route  component={Error}/>

      
    </Switch>
  </>);
}

export default App;