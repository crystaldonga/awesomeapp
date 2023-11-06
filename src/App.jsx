import React from 'react'
import {Switch,Route,Redirect} from "react-router-dom"
import About from './About.jsx'
import Contact from './Contact.jsx'
import Error from './Error.jsx'
import Menu from './Menu.jsx'
import Name from './Name'
import Service from './Service'
import User from './User';
import Search from './Search'

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
      <Route exact path="/User/:fname/:lname" component={User}/>
      <Route path="/User/Name" component={Name}/>
      <Route path="/Search" component={Search}/>
      {/* <Route  component={Error}/> */}
      <Redirect to="/" />

      
      
    </Switch>
  </>);
}

export default App;